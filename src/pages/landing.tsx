import { Link } from 'react-router-dom'
import { ArrowRight, Check, LayoutGrid, FileCheck, MessageSquare, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border bg-gradient-to-b from-card to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 to-transparent" />
        <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <span className="text-xl font-semibold text-primary">Choose & Build</span>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium text-foreground hover:text-primary">
              Log in
            </Link>
            <Button variant="primary" asChild>
              <Link to="/signup">Get started</Link>
            </Button>
          </div>
        </nav>
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Client decisions,{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                one source of truth
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Run projects from kickoff to handover. Publish decision cards, capture approvals with
              timestamps, and keep every choice auditable—so scope stays clear and clients stay
              aligned.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="lg" className="gap-2" asChild>
                <Link to="/signup">
                  Start free trial
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/login">Sign in</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Features bento */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-center text-2xl font-semibold md:text-3xl">Built for architecture firms</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
          Decision Log, timeline checkpoints, and contextual messaging—all in one place.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: LayoutGrid,
              title: 'Decision Log',
              description:
                'Publish comparison cards with options, cost deltas, and recommendations. Clients approve or request changes with one click.',
            },
            {
              icon: FileCheck,
              title: 'Audit-ready records',
              description:
                'Immutable versions and timestamped approvals for every decision. No more "I never approved that" disputes.',
            },
            {
              icon: MessageSquare,
              title: 'Contextual messaging',
              description:
                'Threads tied to decisions, files, and tasks. Replace scattered email with conversations that stay in context.',
            },
            {
              icon: BarChart3,
              title: 'Reports & handover',
              description:
                'Pending approvals, turnaround metrics, and exportable handover packages with versions and audit metadata.',
            },
          ].map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={cn(
                'rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover',
                (i === 0 && 'sm:col-span-2 lg:col-span-1') || ''
              )}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-border bg-muted/40 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-semibold md:text-3xl">How it works</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              'Create a project and add phases and decision checkpoints.',
              'Publish decision cards with options, visuals, and cost impact. Set audience and notify clients.',
              'Clients review, approve or request changes. Every action is timestamped and auditable.',
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                  {i + 1}
                </div>
                <p className="text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-8 text-center md:p-12">
          <h2 className="text-2xl font-semibold md:text-3xl">Ready to reduce scope creep?</h2>
          <p className="mt-2 text-muted-foreground">
            Join architecture firms using Choose & Build for clearer decisions and faster approvals.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg" asChild>
              <Link to="/signup">Start free trial</Link>
            </Button>
            <Link to="/help" className="text-sm font-medium text-primary hover:underline">
              Contact sales
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            {['No credit card required', 'Cancel anytime', 'Audit-ready by default'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 text-sm text-muted-foreground">
          <span>© Choose & Build. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms</Link>
            <Link to="/help" className="hover:text-foreground">Help</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
