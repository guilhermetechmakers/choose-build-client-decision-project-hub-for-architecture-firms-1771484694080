import { Link } from 'react-router-dom'
import { Plus, MoreHorizontal } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'

const mockProjects = [
  { id: '1', name: 'Riverside Residence', phase: 'Schematic Design', client: 'Acme Corp', pending: 2 },
  { id: '2', name: 'Downtown Office Fit-out', phase: 'Design Development', client: 'Beta Inc', pending: 1 },
  { id: '3', name: 'Lake House Renovation', phase: 'Construction Admin', client: 'Smith Family', pending: 0 },
]

export function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Projects</h1>
          <p className="text-muted-foreground">Manage your project timeline and phases.</p>
        </div>
        <Button variant="primary" className="gap-2" asChild>
          <Link to="/dashboard/projects/new">
            <Plus className="h-4 w-4" />
            New project
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>All projects</CardTitle>
              <CardDescription>Click a project to open timeline and decision log.</CardDescription>
            </div>
            <Input placeholder="Search projects..." className="max-w-xs" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left font-medium p-3">Project</th>
                  <th className="text-left font-medium p-3">Phase</th>
                  <th className="text-left font-medium p-3">Client</th>
                  <th className="text-left font-medium p-3">Pending</th>
                  <th className="w-10 p-3" />
                </tr>
              </thead>
              <tbody>
                {mockProjects.map((p) => (
                  <tr
                    key={p.id}
                    className="border-b border-border transition-colors hover:bg-muted/30"
                  >
                    <td className="p-3">
                      <Link
                        to={`/dashboard/projects/${p.id}`}
                        className="font-medium text-primary hover:underline"
                      >
                        {p.name}
                      </Link>
                    </td>
                    <td className="p-3 text-muted-foreground">{p.phase}</td>
                    <td className="p-3">{p.client}</td>
                    <td className="p-3">
                      {p.pending > 0 ? (
                        <span className="rounded-full bg-warning/15 px-2 py-0.5 text-xs font-medium text-warning">
                          {p.pending}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                    <td className="p-3">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon-sm" aria-label="Actions">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link to={`/dashboard/projects/${p.id}`}>Open</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link to={`/dashboard/projects/${p.id}/timeline`}>Timeline</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link to={`/dashboard/projects/${p.id}/decisions`}>Decision log</Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
