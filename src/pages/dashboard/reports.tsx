import { Download } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const mockData = [
  { name: 'Pending approvals', value: 5 },
  { name: 'Avg. turnaround (days)', value: 3 },
  { name: 'Decisions this month', value: 18 },
  { name: 'RFIs open', value: 2 },
]

export function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Reports & Analytics</h1>
          <p className="text-muted-foreground">
            Project health and KPI reporting. Export to CSV or PDF.
          </p>
        </div>
        <Button variant="secondary" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {mockData.map((item) => (
          <Card key={item.name}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {item.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Approval turnaround</CardTitle>
          <CardDescription>Average days from publish to approval (last 6 months)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[{ m: 'Jan', v: 4 }, { m: 'Feb', v: 3 }, { m: 'Mar', v: 5 }, { m: 'Apr', v: 3 }, { m: 'May', v: 2 }, { m: 'Jun', v: 3 }]}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="m" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="v" fill="rgb(var(--primary))" radius={[4, 4, 0, 0]} name="Days" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
