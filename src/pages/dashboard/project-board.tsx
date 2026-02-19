import { useParams, Link } from 'react-router-dom'
import { ChevronRight, Flag } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const phases = [
  { id: 'kickoff', label: 'Kickoff', progress: 100 },
  { id: 'concept', label: 'Concept', progress: 100 },
  { id: 'schematic', label: 'Schematic', progress: 80 },
  { id: 'dd', label: 'DD', progress: 20 },
  { id: 'permitting', label: 'Permitting', progress: 0 },
  { id: 'ca', label: 'CA', progress: 0 },
  { id: 'handover', label: 'Handover', progress: 0 },
]

const mockCheckpoints = [
  { phaseId: 'schematic', title: 'Kitchen finish options', status: 'pending' },
  { phaseId: 'schematic', title: 'Exterior materials', status: 'approved' },
  { phaseId: 'dd', title: 'Flooring type', status: 'pending' },
]

export function ProjectBoardPage() {
  const { projectId } = useParams()

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Project timeline</h1>
          <p className="text-muted-foreground">
            Phase timeline and decision checkpoints for project {projectId ?? '—'}.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm">
            Gantt view
          </Button>
          <Button variant="primary" size="sm" asChild>
            <Link to={`/dashboard/projects/${projectId}/decisions`}>
              Decision log
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Phases</CardTitle>
          <p className="text-sm text-muted-foreground">
            Horizontal phase bars with percent-complete. Click a checkpoint to open the decision.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="overflow-x-auto pb-4">
            <div className="flex min-w-max gap-2">
              {phases.map((p) => (
                <div
                  key={p.id}
                  className="flex w-28 flex-shrink-0 flex-col items-center gap-2 rounded-lg border border-border p-3 transition-shadow hover:shadow-card"
                >
                  <span className="text-xs font-medium text-muted-foreground">{p.label}</span>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-300"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{p.progress}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-border pt-4">
            <h3 className="mb-3 text-sm font-medium">Decision checkpoints</h3>
            <ul className="space-y-2">
              {mockCheckpoints.map((c, i) => (
                <li key={i}>
                  <Link
                    to={`/dashboard/decisions/${c.title.replace(/\s+/g, '-').toLowerCase()}`}
                    className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted/50"
                  >
                    <Flag className="h-4 w-4 text-muted-foreground" />
                    <span className="flex-1 font-medium">{c.title}</span>
                    <span
                      className={cn(
                        'rounded-full px-2 py-0.5 text-xs font-medium',
                        c.status === 'approved' ? 'bg-success/15 text-success' : 'bg-warning/15 text-warning'
                      )}
                    >
                      {c.status}
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
