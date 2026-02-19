import { useParams, useLocation, Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const content: Record<string, { title: string; body: string }> = {
  privacy: {
    title: 'Privacy Policy',
    body: 'This is a placeholder for the Privacy Policy. It would include how we collect, use, and protect your data, contact information, and consent controls. For compliance and user trust.',
  },
  terms: {
    title: 'Terms of Service',
    body: 'This is a placeholder for the Terms of Service. It would include usage terms, liability, and contact links. For legal compliance.',
  },
  cookies: {
    title: 'Cookie Policy',
    body: 'This is a placeholder for the Cookie Policy. It would explain cookie usage and consent controls.',
  },
}

const pathToType: Record<string, string> = { '/privacy': 'privacy', '/terms': 'terms', '/cookies': 'cookies' }

export function LegalPage() {
  const { type } = useParams<{ type: string }>()
  const location = useLocation()
  const resolvedType = type ?? pathToType[location.pathname] ?? 'privacy'
  const page = content[resolvedType] ?? content.privacy

  return (
    <div className="mx-auto max-w-3xl space-y-8 py-12">
      <Link to="/" className="text-sm font-medium text-primary hover:underline">
        ← Back to home
      </Link>
      <Card>
        <CardHeader>
          <CardTitle>{page.title}</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none text-muted-foreground">
          <p>{page.body}</p>
        </CardContent>
      </Card>
    </div>
  )
}
