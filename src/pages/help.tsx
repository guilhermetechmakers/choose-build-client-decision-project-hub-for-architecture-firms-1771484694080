import { Link } from 'react-router-dom'
import { HelpCircle, BookOpen, Mail } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function HelpPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 py-12">
      <div>
        <h1 className="text-2xl font-bold">Help & Support</h1>
        <p className="text-muted-foreground">
          FAQs, guides, walkthroughs, and contact form.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <BookOpen className="h-8 w-8 text-primary" />
            <CardTitle>Guides</CardTitle>
            <CardDescription>Onboarding guides and release notes.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Step-by-step guides for creating projects, publishing decisions, and managing approvals.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <HelpCircle className="h-8 w-8 text-primary" />
            <CardTitle>FAQs</CardTitle>
            <CardDescription>Common questions and answers.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              How to invite clients, how approval workflows work, and how to export handover packages.
            </p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Contact support</CardTitle>
          <CardDescription>Send a message and we'll get back to you.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Brief description" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                className="flex min-h-[120px] w-full rounded-lg border border-input bg-card px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="Describe your issue..."
              />
            </div>
            <Button type="submit" variant="primary" className="gap-2">
              <Mail className="h-4 w-4" />
              Send message
            </Button>
          </form>
        </CardContent>
      </Card>
      <p className="text-center text-sm text-muted-foreground">
        <Link to="/" className="text-primary hover:underline">Back to home</Link>
      </p>
    </div>
  )
}
