import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '@/store'
import { logout } from '@/features/auth/auth.slice'

export function useAuth() {
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return {
    user,
    isAuthenticated,
    logout: handleLogout,
  }
}
