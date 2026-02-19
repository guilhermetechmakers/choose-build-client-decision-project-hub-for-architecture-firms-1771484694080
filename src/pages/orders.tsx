import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function OrdersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Order history</h1>
        <p className="text-muted-foreground">Transactions and invoices for financial audit.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
          <CardDescription>Transactions table and invoice detail modal.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">No transactions yet.</p>
        </CardContent>
      </Card>
    </div>
  )
}
