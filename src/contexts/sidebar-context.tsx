import * as React from 'react'

const SIDEBAR_KEY = 'choose-build-sidebar-collapsed'

type SidebarContextValue = {
  collapsed: boolean
  setCollapsed: (v: boolean) => void
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsedState] = React.useState(() => {
    try {
      return localStorage.getItem(SIDEBAR_KEY) === 'true'
    } catch {
      return false
    }
  })

  const setCollapsed = React.useCallback((value: boolean) => {
    setCollapsedState(value)
    try {
      localStorage.setItem(SIDEBAR_KEY, String(value))
    } catch {
      // ignore
    }
  }, [])

  const value = React.useMemo(() => ({ collapsed, setCollapsed }), [collapsed, setCollapsed])
  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}

export function useSidebar(): SidebarContextValue {
  const ctx = React.useContext(SidebarContext)
  if (!ctx) throw new Error('useSidebar must be used within SidebarProvider')
  return ctx
}
