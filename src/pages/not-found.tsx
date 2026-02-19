import { Link } from 'react-router-dom'
import { FileQuestion } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <FileQuestion className="h-16 w-16 text-muted-foreground" />
      <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
      <p className="mt-2 text-center text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button variant="primary" className="mt-6" asChild>
        <Link to="/">Go home</Link>
      </Button>
    </div>
  )
}
