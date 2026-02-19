import { useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  FolderKanban,
  ClipboardList,
  MessageSquare,
  FileText,
  Calendar,
  LayoutTemplate,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Menu,
  Bell,
  User,
  LogOut,
  Plus,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SidebarProvider, useSidebar } from '@/contexts/sidebar-context'

const navItems = [
  { to: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { to: '/dashboard/projects', label: 'Projects', icon: FolderKanban },
  { to: '/dashboard/decisions', label: 'Decision Log', icon: ClipboardList },
  { to: '/dashboard/messages', label: 'Messages', icon: MessageSquare },
  { to: '/dashboard/files', label: 'Files & Drawings', icon: FileText },
  { to: '/dashboard/meetings', label: 'Meetings', icon: Calendar },
  { to: '/dashboard/templates', label: 'Templates', icon: LayoutTemplate },
  { to: '/dashboard/reports', label: 'Reports', icon: BarChart3 },
]

const bottomNav = [
  { to: '/dashboard/settings', label: 'Settings', icon: Settings },
]

function DashboardSidebar() {
  const { collapsed, setCollapsed } = useSidebar()

  return (
    <aside
      className={cn(
        'flex flex-col border-r border-border bg-card transition-[width] duration-300 ease-in-out',
        collapsed ? 'w-[72px]' : 'w-64'
      )}
    >
      <div className="flex h-14 items-center gap-2 border-b border-border px-3">
        {!collapsed && (
          <Link to="/dashboard" className="flex items-center gap-2 font-semibold text-primary">
            <span className="text-lg">Choose & Build</span>
          </Link>
        )}
      </div>
      <ScrollArea className="flex-1 py-2">
        <nav className="flex flex-col gap-1 px-2">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:bg-secondary',
                  collapsed && 'justify-center px-0'
                )
              }
            >
              <Icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span>{label}</span>}
            </NavLink>
          ))}
        </nav>
        <div className="my-2 h-px bg-border" />
        <nav className="flex flex-col gap-1 px-2">
          {bottomNav.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-secondary',
                  collapsed && 'justify-center px-0'
                )
              }
            >
              <Icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span>{label}</span>}
            </NavLink>
          ))}
        </nav>
      </ScrollArea>
      <div className="border-t border-border p-2">
        <Button
          variant="ghost"
          size="icon"
          className="w-full"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </Button>
      </div>
    </aside>
  )
}

function DashboardTopbar({ onMenuClick }: { onMenuClick?: () => void }) {
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b border-border bg-card px-4">
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={onMenuClick}
        aria-label="Toggle menu"
      >
        <Menu className="h-5 w-5" />
      </Button>
      <div className="flex-1" />
      <div className="flex items-center gap-2">
        <Button variant="primary" size="sm" className="gap-1" asChild>
          <Link to="/dashboard/decisions/new">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">New decision</span>
          </Link>
        </Button>
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="User menu">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem asChild>
              <Link to="/dashboard/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/dashboard/settings">Settings</Link>
            </DropdownMenuItem>
            <div className="my-1 h-px bg-border" />
            <DropdownMenuItem onClick={() => navigate('/login')} className="text-danger">
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

function DashboardLayoutInner() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden md:block">
        <DashboardSidebar />
      </div>
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-64 bg-card">
            <DashboardSidebar />
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardTopbar onMenuClick={() => setMobileOpen((o) => !o)} />
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="mx-auto max-w-[1400px] animate-fade-in-up">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export function DashboardLayout() {
  return (
    <SidebarProvider>
      <DashboardLayoutInner />
    </SidebarProvider>
  )
}
