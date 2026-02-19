import { MessageSquare, Inbox } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function MessagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Messages</h1>
        <p className="text-muted-foreground">
          Contextual threads tied to decisions, files, and tasks.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Threads</CardTitle>
          <CardDescription>Conversations linked to decisions, drawings, and meetings.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 text-center">
            <MessageSquare className="h-12 w-12 text-muted-foreground" />
            <p className="mt-4 font-medium">No threads yet</p>
            <p className="mt-1 text-sm text-muted-foreground">
              When you start a conversation on a decision or file, it will appear here.
            </p>
            <Button variant="secondary" className="mt-4" disabled>
              <Inbox className="mr-2 h-4 w-4" />
              Open inbox
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
