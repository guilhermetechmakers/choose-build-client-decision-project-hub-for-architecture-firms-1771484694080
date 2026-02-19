import { createBrowserRouter } from 'react-router-dom'
import { DashboardLayout } from '@/layouts/dashboard-layout'
import { LandingPage } from '@/pages/landing'
import { LoginPage } from '@/pages/login'
import { SignupPage } from '@/pages/signup'
import { ForgotPasswordPage } from '@/pages/forgot-password'
import { VerifyEmailPage } from '@/pages/verify-email'
import { DashboardOverviewPage } from '@/pages/dashboard/overview'
import { ProjectsPage } from '@/pages/dashboard/projects'
import { DecisionLogPage } from '@/pages/dashboard/decisions'
import { CreateDecisionPage } from '@/pages/dashboard/decisions-new'
import { MessagesPage } from '@/pages/dashboard/messages'
import { FilesPage } from '@/pages/dashboard/files'
import { MeetingsPage } from '@/pages/dashboard/meetings'
import { TemplatesPage } from '@/pages/dashboard/templates'
import { ReportsPage } from '@/pages/dashboard/reports'
import { SettingsPage } from '@/pages/dashboard/settings'
import { ProfilePage } from '@/pages/dashboard/profile'
import { ProjectBoardPage } from '@/pages/dashboard/project-board'
import { BillingPage } from '@/pages/billing'
import { OrdersPage } from '@/pages/orders'
import { AdminDashboardPage } from '@/pages/admin'
import { LegalPage } from '@/pages/legal'
import { HelpPage } from '@/pages/help'
import { NotFoundPage } from '@/pages/not-found'
import { ErrorPage } from '@/pages/error'

export const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/forgot-password', element: <ForgotPasswordPage /> },
  { path: '/verify-email', element: <VerifyEmailPage /> },
  { path: '/help', element: <HelpPage /> },
  { path: '/privacy', element: <LegalPage /> },
  { path: '/terms', element: <LegalPage /> },
  { path: '/cookies', element: <LegalPage /> },
  { path: '/legal/:type', element: <LegalPage /> },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardOverviewPage /> },
      { path: 'overview', element: <DashboardOverviewPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'projects/new', element: <ProjectsPage /> },
      { path: 'projects/:projectId', element: <ProjectBoardPage /> },
      { path: 'projects/:projectId/timeline', element: <ProjectBoardPage /> },
      { path: 'projects/:projectId/decisions', element: <DecisionLogPage /> },
      { path: 'decisions', element: <DecisionLogPage /> },
      { path: 'decisions/new', element: <CreateDecisionPage /> },
      { path: 'decisions/:decisionId', element: <DecisionLogPage /> },
      { path: 'messages', element: <MessagesPage /> },
      { path: 'files', element: <FilesPage /> },
      { path: 'meetings', element: <MeetingsPage /> },
      { path: 'templates', element: <TemplatesPage /> },
      { path: 'reports', element: <ReportsPage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'billing', element: <BillingPage /> },
      { path: 'orders', element: <OrdersPage /> },
      { path: 'admin', element: <AdminDashboardPage /> },
      { path: 'admin/users', element: <AdminDashboardPage /> },
      { path: 'admin/templates', element: <AdminDashboardPage /> },
      { path: 'admin/security', element: <AdminDashboardPage /> },
      { path: 'admin/audit', element: <AdminDashboardPage /> },
    ],
  },
  { path: '/404', element: <NotFoundPage /> },
  { path: '/500', element: <ErrorPage /> },
  { path: '*', element: <NotFoundPage /> },
])
