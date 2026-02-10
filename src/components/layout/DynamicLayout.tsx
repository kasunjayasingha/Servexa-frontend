import { Outlet, useLocation } from 'react-router-dom'
import { DynamicSidebar } from './DynamicSidebar'
import { DynamicNavbar } from './DynamicNavbar'

export function DynamicLayout() {
  const location = useLocation()
  
  const isDashboardRoute = location.pathname.includes('business-owner') || 
                          location.pathname.includes('platform-admin') || 
                          location.pathname.includes('staff')

  if (!isDashboardRoute) {
    return <Outlet />
  }

  return (
    <div className="flex h-screen bg-background-light dark:bg-background-dark">
      <DynamicSidebar />
      <div className="flex flex-1 flex-col">
        <DynamicNavbar />
        <div className="flex-1 overflow-auto bg-background-light dark:bg-background-dark p-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
