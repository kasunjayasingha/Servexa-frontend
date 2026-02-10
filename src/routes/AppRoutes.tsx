import {Navigate, Route, Routes} from 'react-router-dom'
import {ProtectedInternalRoute} from './ProtectedInternalRoute.tsx'
import {Login} from '@/features/auth/pages/Login'
import {ForgotPassword} from '@/features/auth/pages/ForgotPassword'
import {SignUp} from '@/features/auth/pages/SignUp'
import {Dashboard} from '@/features/dashboard/pages/Dashboard'
import {CustomerList} from '@/features/customers/pages/CustomerList'
import {CustomerDetails} from '@/features/customers/pages/CustomerDetails'
import {InventoryList} from '@/features/inventory/pages/InventoryList'
import {ROUTES} from '@/utils/constants'

export function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />

      <Route element={<ProtectedInternalRoute />}>
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.CUSTOMERS} element={<CustomerList />} />
        <Route path={ROUTES.CUSTOMER_DETAILS} element={<CustomerDetails />} />
        <Route path={ROUTES.INVENTORY} element={<InventoryList />} />
      </Route>

      <Route path="/" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
      <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
    </Routes>
  )
}
