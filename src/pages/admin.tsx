import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { Users, LayoutTemplate, CreditCard, Shield, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Admin</h1>
        <p className="text-muted-foreground">Firm-level admin controls.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { to: '/dashboard/admin/users', label: 'User management', icon: Users },
          { to: '/dashboard/admin/templates', label: 'Templates', icon: LayoutTemplate },
          { to: '/dashboard/billing', label: 'Billing', icon: CreditCard },
          { to: '/dashboard/admin/security', label: 'Security', icon: Shield },
          { to: '/dashboard/admin/audit', label: 'Audit logs', icon: FileText },
        ].map(({ to, label, icon: Icon }) => (
          <Card key={to} className="transition-shadow hover:shadow-card-hover">
            <CardHeader className="pb-2">
              <Icon className="h-8 w-8 text-primary" />
              <CardTitle className="text-base">{label}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="tertiary" size="sm" asChild>
                <Link to={to}>Open</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
