import { Folder, Upload } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function FilesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Files & Drawings</h1>
          <p className="text-muted-foreground">
            Manage project assets with versions and link to decisions.
          </p>
        </div>
        <Button variant="primary" className="gap-2">
          <Upload className="h-4 w-4" />
          Upload
        </Button>
      </div>
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Folder browser</CardTitle>
              <CardDescription>Select a project to view files and drawings.</CardDescription>
            </div>
            <Input placeholder="Search files..." className="max-w-xs" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 text-center">
            <Folder className="h-12 w-12 text-muted-foreground" />
            <p className="mt-4 font-medium">No project selected</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Choose a project from the sidebar or search to view its files.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
