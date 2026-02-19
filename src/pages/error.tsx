import { Link } from 'react-router-dom'
import { AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ErrorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <AlertCircle className="h-16 w-16 text-danger" />
      <h1 className="mt-4 text-2xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-center text-muted-foreground">
        An unexpected error occurred. Please try again.
      </p>
      <Button variant="primary" className="mt-6" asChild>
        <Link to="/">Go home</Link>
      </Button>
    </div>
  )
}
