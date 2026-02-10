import {Navigate, Route, Routes} from 'react-router-dom'
import {Login} from '@/features/auth/pages/Login'
import {ForgotPassword} from '@/features/auth/pages/ForgotPassword'
import {SignUp} from '@/features/auth/pages/SignUp'
import {OidcCallback} from '@/features/auth/pages/OidcCallback'
import {Dashboard} from '@/features/dashboard/pages/Dashboard'
import {BusinessOwnerDashboard} from '@/features/dashboard/pages/BusinessOwnerDashboard'
import {PlatformSuperAdminDashboard} from '@/features/dashboard/pages/PlatformSuperAdminDashboard'
import {StaffOperationalDashboard} from '@/features/dashboard/pages/StaffOperationalDashboard'
import {CustomerList} from '@/features/customers/pages/CustomerList'
import {CustomerDetails} from '@/features/customers/pages/CustomerDetails'
import {InventoryList} from '@/features/inventory/pages/InventoryList'
import {ROUTES} from '@/utils/constants'
import {ProtectedRoute} from "@/routes/ProtectedRoute.tsx";

export function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route path={ROUTES.OIDC_CALLBACK} element={<OidcCallback />} />

      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.BUSINESS_OWNER_DASHBOARD} element={<BusinessOwnerDashboard />} />
        <Route path={ROUTES.PLATFORM_ADMIN_DASHBOARD} element={<PlatformSuperAdminDashboard />} />
        <Route path={ROUTES.STAFF_DASHBOARD} element={<StaffOperationalDashboard />} />
        <Route path={ROUTES.CUSTOMERS} element={<CustomerList />} />
        <Route path={ROUTES.CUSTOMER_DETAILS} element={<CustomerDetails />} />
        <Route path={ROUTES.INVENTORY} element={<InventoryList />} />
      </Route>

      <Route path="/" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
      <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
    </Routes>
  )
}
