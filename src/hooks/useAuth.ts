import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '@/store'
import { logout } from '@/features/auth/auth.slice'
import { authApi } from '@/api/auth.api'
import { startOidcLogout } from '@/features/auth/pkce'

export function useAuth() {
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {
      await authApi.logout()
    } catch {
      // ignore API errors on logout
    }

    dispatch(logout())
    startOidcLogout()
  }

  return {
    user,
    isAuthenticated,
    logout: handleLogout,
  }
}
