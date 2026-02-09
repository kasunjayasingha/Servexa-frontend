import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button } from '@/components/common/Button'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { startPkceAuth } from '@/features/auth/pkce'
import { shouldForceSsoOnly, isInternalUserEmail } from '@/features/auth/authPolicy'
import { startSocialLogin } from '@/features/auth/socialLogin'
import HubIcon from '@mui/icons-material/Hub'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import { authApi } from '@/api/auth.api'
import { setCredentials } from '../auth.slice'
import { ROUTES } from '@/utils/constants'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // True when this deployment/hostname is "internal staff" only.
  const ssoOnly = shouldForceSsoOnly()
  // In a mixed deployment, internal staff emails should still be forced to SSO.
  const ssoRequiredForEmail = !ssoOnly && isInternalUserEmail(email)
  const hideCustomerOptions = ssoOnly || ssoRequiredForEmail

  const handleSsoLogin = () => {
    void startPkceAuth()
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (ssoOnly || ssoRequiredForEmail) {
      void startPkceAuth()
      return
    }
    if (isSubmitting) return

    setError('')
    setIsSubmitting(true)

    try {
      const { data } = await authApi.login({ email, password })
      dispatch(setCredentials({ user: data.user, token: data.accessToken }))
      navigate(ROUTES.DASHBOARD)
    } catch {
      setError('Invalid email or password')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased">
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-6 sm:p-12">
        {/* Theme toggle in corner */}
        <div className="pointer-events-none absolute right-4 top-4 z-20">
          <div className="pointer-events-auto rounded-full bg-slate-900/5 p-1 backdrop-blur dark:bg-slate-900/40">
            <ThemeToggle size="small" />
          </div>
        </div>
        {/* Abstract Background Decor */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_20%_20%,#2b4bee10_0%,transparent_50%)]" />
          <div className="absolute bottom-0 right-0 h-full w-full bg-[radial-gradient(circle_at_80%_80%,#2b4bee10_0%,transparent_50%)]" />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-md">
          {/* Branding */}
          <div className="mb-10 flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30">
              <HubIcon fontSize="medium" />
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Enterprise SaaS
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Microservices management for modern teams
            </p>
          </div>

          {/* Login Card */}
          <div className="overflow-hidden rounded-xl bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none ring-1 ring-slate-200 dark:ring-slate-800">
            <div className="p-8 sm:p-10">
              <div className="mb-8">
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">Welcome Back</h1>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Please enter your credentials to access your account.
                </p>
              </div>

              {ssoOnly ? (
                <>
                  <div className="mb-6 rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm text-indigo-700 dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-200">
                    Internal staff access requires <span className="font-semibold">Company SSO</span>.
                  </div>

                  <Button
                    type="button"
                    onClick={handleSsoLogin}
                    className="flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    Continue with Company SSO
                    <span className="ml-2">
                      <ArrowForwardIcon fontSize="small" />
                    </span>
                  </Button>
                </>
              ) : (
                <>
                  {ssoRequiredForEmail && (
                    <div className="mb-6 rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm text-indigo-700 dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-200">
                      This email belongs to internal staff. Please use <span className="font-semibold">Company SSO</span>.
                      <div className="mt-3">
                        <Button
                          type="button"
                          onClick={handleSsoLogin}
                          className="flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        >
                          Continue with Company SSO
                          <span className="ml-2">
                            <ArrowForwardIcon fontSize="small" />
                          </span>
                        </Button>
                      </div>
                    </div>
                  )}
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Email Field */}
                    <div className="flex flex-col gap-2">
                      <label
                        className="text-sm font-medium text-slate-700 dark:text-slate-300"
                        htmlFor="email"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                          <MailOutlineIcon fontSize="small" />
                        </div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="block w-full rounded-lg border border-slate-300 bg-white px-10 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
                          placeholder="name@company.com"
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <label
                          className="text-sm font-medium text-slate-700 dark:text-slate-300"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <Button
                          type="button"
                          className="text-xs font-semibold text-primary transition-colors hover:text-primary/80"
                          onClick={() => navigate(ROUTES.FORGOT_PASSWORD)}
                          disabled={ssoRequiredForEmail}
                        >
                          Forgot password?
                        </Button>
                      </div>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                          <LockOutlinedIcon fontSize="small" />
                        </div>
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          autoComplete="current-password"
                          required
                          disabled={ssoRequiredForEmail}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="block w-full rounded-lg border border-slate-300 bg-white px-10 py-3 pr-12 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
                          placeholder="••••••••"
                        />
                        <Button
                          type="button"
                          className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 transition-colors hover:text-slate-600 dark:hover:text-slate-300"
                          onClick={() => setShowPassword((prev) => !prev)}
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                          {showPassword ? (
                            <VisibilityOffIcon fontSize="small" />
                          ) : (
                            <VisibilityIcon fontSize="small" />
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-slate-600 dark:text-slate-400"
                      >
                        Remember me on this device
                      </label>
                    </div>

                    {/* Error Message */}
                    {error && (
                      <p className="text-sm font-medium text-red-600 dark:text-red-400">{error}</p>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? 'Signing in...' : 'Sign in to Workspace'}
                      {!isSubmitting && (
                        <span className="ml-2">
                          <ArrowForwardIcon fontSize="small" />
                        </span>
                      )}
                    </Button>
                  </form>

                  {/* Social login options (external customers) */}
                  {!ssoRequiredForEmail && (
                    <div className="mt-8">
                    <div className="relative">
                      <div aria-hidden="true" className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200 dark:border-slate-800" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-slate-500 dark:bg-slate-900 dark:text-slate-500">
                          Or continue with
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <Button
                        type="button"
                        onClick={() => startSocialLogin('google')}
                        className="flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700/50"
                      >
                        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C5.71 7.31 8.14 5.38 12 5.38z"
                            fill="#EA4335"
                          />
                        </svg>
                        Google
                      </Button>

                      <Button
                        type="button"
                        onClick={() => startSocialLogin('github')}
                        className="flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700/50"
                      >
                        <svg
                          className="mr-2 h-4 w-4 fill-current"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </Button>
                    </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Card Footer */}
            <div className="bg-slate-50 px-8 py-4 text-center dark:bg-slate-800/50">
              {!hideCustomerOptions && (
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Don't have an account?
                  <Button
                    type="button"
                    className="ml-1 font-bold text-primary hover:underline"
                    onClick={() => navigate(ROUTES.SIGN_UP)}
                  >
                    Request Access
                  </Button>
                </p>
              )}
            </div>
          </div>

          {/* Utility Links */}
          <div className="mt-8 flex justify-center gap-6">
            <Button
              type="button"
              className="text-xs text-slate-400 transition-colors hover:text-slate-600"
            >
              Privacy Policy
            </Button>
            <Button
              type="button"
              className="text-xs text-slate-400 transition-colors hover:text-slate-600"
            >
              Terms of Service
            </Button>
            <Button
              type="button"
              className="text-xs text-slate-400 transition-colors hover:text-slate-600"
            >
              Help Center
            </Button>
          </div>
        </div>

        {/* Security Badge */}
        <div className="mt-10 flex items-center gap-2 text-slate-400">
          <ShieldOutlinedIcon fontSize="inherit" />
          <span className="text-[10px] font-semibold uppercase tracking-widest">
            AES-256 Bit Encrypted Connection
          </span>
        </div>
      </div>
    </div>
  )
}
