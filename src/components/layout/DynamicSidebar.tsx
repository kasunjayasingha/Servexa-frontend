import { useLocation } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import AssessmentIcon from '@mui/icons-material/Assessment'
import PaymentsIcon from '@mui/icons-material/Payments'
import SettingsIcon from '@mui/icons-material/Settings'
import StorefrontIcon from '@mui/icons-material/Storefront'
import CorporateFareIcon from '@mui/icons-material/CorporateFare'
import ExtensionIcon from '@mui/icons-material/Extension'
import SecurityIcon from '@mui/icons-material/Security'
import CloudIcon from '@mui/icons-material/Cloud'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import InventoryIcon from '@mui/icons-material/Inventory'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import AssignmentIcon from '@mui/icons-material/Assignment'
import LogoutIcon from '@mui/icons-material/Logout'
import { ROUTES } from '@/utils/constants'

const sidebarConfigs = {
  businessOwner: {
    logo: <StorefrontIcon className="text-white text-lg" />,
    color: '#2b4bee',
    mainMenu: [
      { icon: <DashboardIcon className="text-xl" />, label: 'Enterprise Overview', path: ROUTES.BUSINESS_OWNER_DASHBOARD },
      { icon: <AccountTreeIcon className="text-xl" />, label: 'Branch Management', path: '#' },
      { icon: <AssessmentIcon className="text-xl" />, label: 'Owner Reports', path: '#' },
    ],
    systemMenu: [
      { icon: <PaymentsIcon className="text-xl" />, label: 'My Subscription', path: '#' },
      { icon: <SettingsIcon className="text-xl" />, label: 'General Settings', path: '#' },
    ],
    footer: (
      <div className="m-4 mt-auto rounded-xl border border-primary/20 bg-primary/10 p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-bold uppercase text-primary">ENTERPRISE PLAN</span>
        </div>
        <div className="mb-3 text-xs text-slate-500 dark:text-slate-400">Renews on Oct 12, 2024</div>
        <button className="w-full rounded-lg bg-primary py-2 text-xs font-semibold text-white transition-all hover:bg-primary/90">
          Manage Billing
        </button>
      </div>
    ),
  },
  platformAdmin: {
    logo: <CloudIcon className="text-white text-xl" />,
    color: '#4b2bee',
    mainMenu: [
      { icon: <DashboardIcon className="text-xl" />, label: 'Dashboard', path: ROUTES.PLATFORM_ADMIN_DASHBOARD },
      { icon: <CorporateFareIcon className="text-xl" />, label: 'Tenants', path: '#' },
      { icon: <PaymentsIcon className="text-xl" />, label: 'Subscription Plans', path: '#' },
    ],
    systemMenu: [
      { icon: <ExtensionIcon className="text-xl" />, label: 'Module Management', path: '#' },
      { icon: <SecurityIcon className="text-xl" />, label: 'System Audits', path: '#' },
      { icon: <SettingsIcon className="text-xl" />, label: 'Global Settings', path: '#' },
    ],
    footer: (
      <div className="m-4 mt-auto flex items-center gap-3 rounded-xl bg-slate-100 dark:bg-slate-800 p-4">
        <div className="h-10 w-10 rounded-full bg-slate-300 dark:bg-slate-700" />
        <div>
          <div className="text-sm font-semibold text-slate-900 dark:text-white">Alex Sterling</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">Super Admin</div>
        </div>
      </div>
    ),
  },
  staff: {
    logo: <ShoppingBagIcon className="text-white text-lg" />,
    color: '#2b4bee',
    mainMenu: [
      { icon: <DashboardIcon className="text-xl" />, label: 'Dashboard', path: ROUTES.STAFF_DASHBOARD },
      { icon: <InventoryIcon className="text-xl" />, label: 'Inventory', path: '#' },
      { icon: <PointOfSaleIcon className="text-xl" />, label: 'Sales Log', path: '#' },
    ],
    systemMenu: [
      { icon: <AssignmentIcon className="text-xl" />, label: 'Tasks', path: '#' },
      { icon: <AssessmentIcon className="text-xl" />, label: 'Reports', path: '#' },
    ],
    footer: (
      <div className="m-4 mt-auto flex items-center gap-3 rounded-xl bg-slate-100 dark:bg-slate-800 p-3">
        <div className="h-10 w-10 rounded-full bg-slate-300 dark:bg-slate-700" />
        <div className="flex-1">
          <div className="text-sm font-semibold text-slate-900 dark:text-white">Alex Rivera</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">FLOOR SUPERVISOR</div>
        </div>
        <button className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">
          <LogoutIcon className="text-sm" />
        </button>
      </div>
    ),
  },
}

export function DynamicSidebar() {
  const location = useLocation()
  
  let config = null
  if (location.pathname.includes('business-owner')) config = sidebarConfigs.businessOwner
  else if (location.pathname.includes('platform-admin')) config = sidebarConfigs.platformAdmin
  else if (location.pathname.includes('staff')) config = sidebarConfigs.staff
  
  if (!config) return null

  return (
    <aside className="flex w-64 flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-3 p-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ backgroundColor: config.color }}>
          {config.logo}
        </div>
        <h1 className="text-xl font-bold tracking-tight text-slate-800 dark:text-white">
          Cloudmart<span style={{ color: config.color }}>Pro</span>
        </h1>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto px-4">
        <div className="mb-2 px-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Main Menu</div>
        {config.mainMenu.map((item, idx) => (
          <a
            key={idx}
            href={item.path}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              location.pathname === item.path
                ? 'text-white'
                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
            }`}
            style={location.pathname === item.path ? { backgroundColor: config.color } : {}}
          >
            <span className="min-w-[20px]">{item.icon}</span>
            {item.label}
          </a>
        ))}
        <div className="mb-2 mt-8 px-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          {location.pathname.includes('platform-admin') ? 'Platform Control' : 'System'}
        </div>
        {config.systemMenu.map((item, idx) => (
          <a
            key={idx}
            href={item.path}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            <span className="min-w-[20px]">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>
      {config.footer}
    </aside>
  )
}
