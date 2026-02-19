import { Calendar, Plus } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function MeetingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Meetings & Agendas</h1>
          <p className="text-muted-foreground">
            Schedule meetings and capture agendas, minutes, and action items.
          </p>
        </div>
        <Button variant="primary" className="gap-2">
          <Plus className="h-4 w-4" />
          New meeting
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Upcoming meetings</CardTitle>
          <CardDescription>Agenda builder, notes template, and export minutes.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 text-center">
            <Calendar className="h-12 w-12 text-muted-foreground" />
            <p className="mt-4 font-medium">No upcoming meetings</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Create a meeting to add agendas and link to decisions or drawings.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
