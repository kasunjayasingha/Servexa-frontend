import { useLocation } from 'react-router-dom'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import { ThemeToggle } from '../common/ThemeToggle'

const navbarConfigs = {
  businessOwner: {
    title: 'Business Owner Dashboard',
    content: (
      <>
        <div className="flex-1" />
        <div className="mr-4 flex gap-1 rounded-lg bg-slate-100 p-1 dark:bg-slate-800">
          <button className="rounded bg-primary px-3 py-1 text-xs font-medium text-white shadow-sm">Daily</button>
          <button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">Weekly</button>
          <button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">Monthly</button>
          <button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">Yearly</button>
        </div>
        <button className="p-2 text-slate-500 transition-colors hover:text-primary">
          <NotificationsIcon />
        </button>
        <div className="ml-4 flex items-center gap-3 border-l border-slate-200 pl-4 dark:border-slate-800">
          <div className="text-right">
            <div className="text-sm font-semibold leading-tight text-slate-900 dark:text-white">Alex Sterling</div>
            <div className="text-[10px] font-bold uppercase tracking-tight text-slate-500">ENTERPRISE OWNER</div>
          </div>
          <div className="h-10 w-10 rounded-full border-2 border-primary/20 bg-slate-300 dark:bg-slate-700" />
        </div>
        <div className="ml-4">
          <ThemeToggle size="small" />
        </div>
      </>
    ),
  },
  platformAdmin: {
    title: 'Platform Overview',
    subtitle: 'Global performance across all 142 business tenants.',
    content: (
      <>
        <div className="flex-1" />
        <div className="relative mr-4 w-64">
          <SearchIcon className="pointer-events-none absolute left-3 top-2.5 text-sm text-slate-400" />
          <input
            type="text"
            placeholder="Search tenants..."
            className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
          />
        </div>
        <button className="mr-4 flex items-center gap-2 rounded-lg bg-[#4b2bee] px-4 py-2 text-sm font-medium text-white transition-opacity hover:bg-[#4b2bee]/90">
          <AddIcon className="text-sm" />
          New Tenant
        </button>
        <ThemeToggle size="small" />
      </>
    ),
  },
  staff: {
    content: (
      <>
        <div className="relative w-[500px]">
          <SearchIcon className="pointer-events-none absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search SKU, Order ID, or Customer (Ctrl + K)"
            className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
          />
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">POS Sync Active</span>
          </div>
          <button className="relative text-slate-400 transition-colors hover:text-primary">
            <NotificationsIcon />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">3</span>
          </button>
          <ThemeToggle size="small" />
        </div>
      </>
    ),
  },
}

export function DynamicNavbar() {
  const location = useLocation()
  
  let config = null
  if (location.pathname.includes('business-owner')) config = navbarConfigs.businessOwner
  else if (location.pathname.includes('platform-admin')) config = navbarConfigs.platformAdmin
  else if (location.pathname.includes('staff')) config = navbarConfigs.staff
  
  if (!config) return null

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-8 dark:border-slate-800 dark:bg-background-dark">
      {config.title && (
        <div>
          <h1 className="text-lg font-semibold text-slate-900 dark:text-white">{config.title}</h1>
          {config.subtitle && <p className="text-sm text-slate-500 dark:text-slate-400">{config.subtitle}</p>}
        </div>
      )}
      {config.content}
    </header>
  )
}
