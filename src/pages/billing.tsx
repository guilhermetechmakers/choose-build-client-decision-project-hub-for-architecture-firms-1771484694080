import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function BillingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Billing</h1>
        <p className="text-muted-foreground">Subscription and payment management.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Current plan</CardTitle>
          <CardDescription>Manage your subscription and add-ons.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Plan selection, payment form, invoice history, and add-ons would appear here. Stripe
            integration for MVP.
          </p>
          <Button variant="primary">Update plan</Button>
        </CardContent>
      </Card>
    </div>
  )
}
