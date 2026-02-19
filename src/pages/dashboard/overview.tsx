import { Link } from 'react-router-dom'
import { FolderKanban, ClipboardList, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const mockProjects = [
  { id: '1', name: 'Riverside Residence', phase: 'Schematic Design', pendingDecisions: 2 },
  { id: '2', name: 'Downtown Office Fit-out', phase: 'Design Development', pendingDecisions: 1 },
  { id: '3', name: 'Lake House Renovation', phase: 'Construction Admin', pendingDecisions: 0 },
]

const mockActivity = [
  { time: '10:30', text: 'Decision "Kitchen finishes" approved by client', project: 'Riverside' },
  { time: '09:15', text: 'New decision published: "Exterior materials"', project: 'Downtown Office' },
  { time: 'Yesterday', text: 'Meeting notes added for kickoff', project: 'Lake House' },
]

const mockChartData = [
  { month: 'Jan', approvals: 4, published: 6 },
  { month: 'Feb', approvals: 7, published: 5 },
  { month: 'Mar', approvals: 5, published: 8 },
  { month: 'Apr', approvals: 9, published: 7 },
  { month: 'May', approvals: 6, published: 6 },
]

export function DashboardOverviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Overview</h1>
        <p className="text-muted-foreground">Your projects and pending approvals at a glance.</p>
      </div>

      {/* KPI tiles */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Pending approvals', value: '5', trend: 'up', sub: 'Across 3 projects', icon: ClipboardList },
          { label: 'Active projects', value: '12', trend: 'neutral', sub: '3 with action needed', icon: FolderKanban },
          { label: 'Decisions this month', value: '18', trend: 'up', sub: '+2 from last month', icon: ClipboardList },
          { label: 'Meetings this week', value: '4', trend: 'down', sub: 'Next: Tomorrow 2pm', icon: Calendar },
        ].map((item) => (
          <Card key={item.label} className="overflow-hidden transition-shadow duration-300 hover:shadow-card-hover">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {item.label}
              </CardTitle>
              <item.icon className="h-5 w-5 text-primary/60" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                {item.trend === 'up' && <ArrowUpRight className="h-3 w-3 text-success" />}
                {item.trend === 'down' && <ArrowDownRight className="h-3 w-3 text-warning" />}
                {item.sub}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Projects */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Projects</CardTitle>
              <CardDescription>Recent projects with pending decisions</CardDescription>
            </div>
            <Button variant="tertiary" size="sm" asChild>
              <Link to="/dashboard/projects">View all</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {mockProjects.map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/dashboard/projects/${p.id}`}
                    className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-secondary"
                  >
                    <div>
                      <p className="font-medium">{p.name}</p>
                      <p className="text-sm text-muted-foreground">{p.phase}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {p.pendingDecisions > 0 && (
                        <span className="rounded-full bg-warning/15 px-2 py-0.5 text-xs font-medium text-warning">
                          {p.pendingDecisions} pending
                        </span>
                      )}
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Activity</CardTitle>
            <CardDescription>Latest updates across projects</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {mockActivity.map((a, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span className="shrink-0 text-muted-foreground">{a.time}</span>
                  <div>
                    <p className="text-foreground">{a.text}</p>
                    <p className="text-xs text-muted-foreground">{a.project}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Approvals & published decisions</CardTitle>
          <CardDescription>Last 5 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockChartData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{ borderRadius: '8px', border: '1px solid var(--border)' }}
                  labelStyle={{ color: 'var(--foreground)' }}
                />
                <Area
                  type="monotone"
                  dataKey="approvals"
                  stroke="rgb(var(--success))"
                  fill="rgb(var(--success) / 0.2)"
                  strokeWidth={2}
                  name="Approvals"
                />
                <Area
                  type="monotone"
                  dataKey="published"
                  stroke="rgb(var(--primary))"
                  fill="rgb(var(--primary) / 0.2)"
                  strokeWidth={2}
                  name="Published"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
