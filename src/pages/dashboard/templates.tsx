import { LayoutTemplate, Plus } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function TemplatesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Templates Library</h1>
          <p className="text-muted-foreground">
            Reusable project and decision templates to speed up setup.
          </p>
        </div>
        <Button variant="primary" className="gap-2">
          <Plus className="h-4 w-4" />
          New template
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Templates</CardTitle>
          <CardDescription>Apply a template to create a new project with phases and decision sets.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 text-center">
            <LayoutTemplate className="h-12 w-12 text-muted-foreground" />
            <p className="mt-4 font-medium">No templates yet</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Create a template from an existing project or start from scratch.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
