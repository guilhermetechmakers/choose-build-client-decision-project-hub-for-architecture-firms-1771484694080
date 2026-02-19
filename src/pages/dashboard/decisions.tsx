import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search, Filter, ChevronRight, DollarSign, Image } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const mockDecisions = [
  {
    id: '1',
    title: 'Kitchen finish options',
    project: 'Riverside Residence',
    status: 'pending',
    costDelta: '+$2,400',
    lastActivity: '2 hours ago',
    optionsCount: 3,
  },
  {
    id: '2',
    title: 'Exterior materials',
    project: 'Downtown Office Fit-out',
    status: 'approved',
    costDelta: '$0',
    lastActivity: '1 day ago',
    optionsCount: 4,
  },
  {
    id: '3',
    title: 'Flooring type',
    project: 'Lake House Renovation',
    status: 'changes_requested',
    costDelta: '−$800',
    lastActivity: '3 days ago',
    optionsCount: 2,
  },
]

const statusStyles: Record<string, string> = {
  pending: 'bg-warning/15 text-warning',
  approved: 'bg-success/15 text-success',
  changes_requested: 'bg-danger/15 text-danger',
}

export function DecisionLogPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = mockDecisions.find((d) => d.id === selectedId)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Decision Log</h1>
          <p className="text-muted-foreground">
            Centralized list of decision cards. Open one to view details and approval controls.
          </p>
        </div>
        <Button variant="primary" className="gap-2" asChild>
          <Link to="/dashboard/decisions/new">
            <Plus className="h-4 w-4" />
            New decision
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Decisions</CardTitle>
              <CardDescription>Filter by project, status, or search by title.</CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-9 w-48" />
              </div>
              <Button variant="secondary" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {mockDecisions.map((d) => (
              <div
                key={d.id}
                className={cn(
                  'flex flex-wrap items-center gap-4 rounded-lg border border-border p-4 transition-all duration-200 hover:shadow-card',
                  selectedId === d.id && 'border-primary/50 bg-primary/5'
                )}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <Image className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium">{d.title}</p>
                  <p className="text-sm text-muted-foreground">{d.project} · {d.lastActivity}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <DollarSign className="h-4 w-4" />
                    {d.costDelta}
                  </span>
                  <span
                    className={cn(
                      'rounded-full px-2 py-0.5 text-xs font-medium',
                      statusStyles[d.status] ?? 'bg-muted text-muted-foreground'
                    )}
                  >
                    {d.status.replace('_', ' ')}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedId(d.id)}
                  className="gap-1"
                >
                  View
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Sheet open={!!selectedId} onOpenChange={(open) => !open && setSelectedId(null)}>
        <SheetContent className="flex flex-col sm:max-w-lg">
          {selected && (
            <>
              <SheetHeader>
                <SheetTitle>{selected.title}</SheetTitle>
                <p className="text-sm text-muted-foreground">{selected.project}</p>
              </SheetHeader>
              <div className="flex-1 space-y-4 py-4">
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      'rounded-full px-2 py-0.5 text-xs font-medium',
                      statusStyles[selected.status] ?? 'bg-muted'
                    )}
                  >
                    {selected.status.replace('_', ' ')}
                  </span>
                  <span className="text-sm text-muted-foreground">Cost impact: {selected.costDelta}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {selected.optionsCount} options · Last activity {selected.lastActivity}
                </p>
                <div className="rounded-lg border border-border bg-muted/30 p-4 text-center text-sm text-muted-foreground">
                  Gallery, PDFs, recommendation, and approval controls would appear here in the full
                  detail view.
                </div>
                <div className="flex gap-2 pt-4">
                  <Button variant="primary" className="flex-1" asChild>
                    <Link to={`/dashboard/decisions/${selected.id}`}>Open full view</Link>
                  </Button>
                  <Button variant="secondary" onClick={() => setSelectedId(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}
