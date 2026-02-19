import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Upload, Image } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

const steps = [
  { id: 1, label: 'Info' },
  { id: 2, label: 'Options' },
  { id: 3, label: 'Cost & recommendation' },
  { id: 4, label: 'Audience & publish' },
]

export function CreateDecisionPage() {
  const [step, setStep] = useState(1)
  const navigate = useNavigate()

  const handlePublish = () => {
    toast.success('Decision published. Recipients have been notified.')
    navigate('/dashboard/decisions')
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/dashboard/decisions">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Create decision</h1>
          <p className="text-muted-foreground">Multi-step publisher for decision cards.</p>
        </div>
      </div>

      {/* Step indicator */}
      <div className="flex gap-2">
        {steps.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setStep(s.id)}
            className={cn(
              'flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors',
              step === s.id
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-border text-muted-foreground hover:bg-muted'
            )}
          >
            {s.label}
          </button>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Step {step}: {steps[step - 1].label}</CardTitle>
          <CardDescription>
            {step === 1 && 'Enter decision title and short description.'}
            {step === 2 && 'Add options with images or PDFs.'}
            {step === 3 && 'Set cost deltas and mark the recommended option.'}
            {step === 4 && 'Choose audience and schedule publish.'}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {step === 1 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="e.g. Kitchen finish options" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" placeholder="Short context for the client" />
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className="rounded-lg border border-dashed border-border p-8 text-center">
                <Upload className="mx-auto h-10 w-10 text-muted-foreground" />
                <p className="mt-2 text-sm font-medium">Upload option images or PDFs</p>
                <p className="text-xs text-muted-foreground">Drag and drop or click to browse</p>
                <Button variant="secondary" size="sm" className="mt-4">Add option</Button>
              </div>
              <div className="flex gap-2">
                <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-border bg-muted">
                  <Image className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-dashed border-border">
                  <span className="text-xs text-muted-foreground">+ Option</span>
                </div>
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <div className="space-y-2">
                <Label>Cost delta per option</Label>
                <div className="space-y-2">
                  <Input placeholder="Option A: $0" />
                  <Input placeholder="Option B: +$2,400" />
                  <Input placeholder="Option C: −$800" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Recommended option</Label>
                <Input placeholder="Option B (best value)" />
              </div>
            </>
          )}
          {step === 4 && (
            <>
              <div className="space-y-2">
                <Label>Audience</Label>
                <Input placeholder="Select approvers..." />
              </div>
              <div className="space-y-2">
                <Label>Publish schedule</Label>
                <Input type="datetime-local" />
              </div>
            </>
          )}

          <div className="flex justify-between pt-4">
            <Button
              variant="secondary"
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              disabled={step === 1}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            {step < 4 ? (
              <Button variant="primary" onClick={() => setStep((s) => s + 1)}>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button variant="primary" onClick={handlePublish}>
                Publish decision
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
