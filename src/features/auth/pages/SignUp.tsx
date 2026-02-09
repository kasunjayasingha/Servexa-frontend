import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { authApi } from '@/api/auth.api'
import { setCredentials } from '../auth.slice'
import { ROUTES } from '@/utils/constants'

export function SignUp() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmitting) return
    if (!acceptTerms) {
      setError('You must accept the terms and conditions.')
      return
    }

    setError('')
    setIsSubmitting(true)

    try {
      const { data } = await authApi.register({ name: fullName, email, password })
      dispatch(setCredentials({ user: data.user, token: data.accessToken }))
      navigate(ROUTES.DASHBOARD)
    } catch {
      setError('Failed to create account. Please try again.')
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
          <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_20%_20%,#4f46e515_0%,transparent_50%)]" />
          <div className="absolute bottom-0 right-0 h-full w-full bg-[radial-gradient(circle_at_80%_80%,#4f46e515_0%,transparent_50%)]" />
        </div>

        <div className="relative z-10 w-full max-w-md">
          {/* Branding */}
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-indigo-500/30">
              <AccountTreeIcon fontSize="medium" />
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-[0.2em] text-slate-900 dark:text-white uppercase">
              MicroStack
            </h2>
          </div>

          {/* Card */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-200/60 ring-1 ring-slate-200 dark:bg-slate-900 dark:shadow-none dark:ring-slate-800">
            <div className="p-8 sm:p-10">
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Create an Account
                </h1>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Join our microservices platform
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Full name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="fullname"
                    className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                      <PersonOutlineIcon fontSize="small" />
                    </div>
                    <input
                      id="fullname"
                      name="fullname"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="John Doe"
                      className="block w-full rounded-lg border border-slate-300 bg-white px-10 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Work Email
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
                      placeholder="name@company.com"
                      className="block w-full rounded-lg border border-slate-300 bg-white px-10 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                      <LockOutlinedIcon fontSize="small" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="block w-full rounded-lg border border-slate-300 bg-white px-10 py-2.5 pr-10 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 transition-colors hover:text-slate-600 dark:hover:text-slate-300"
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
                    </button>
                  </div>

                  {/* Static strength meter (visual only) */}
                  <div className="mt-2 space-y-2">
                    <div className="flex gap-1.5">
                      <div className="h-1 w-1/4 rounded-full bg-primary" />
                      <div className="h-1 w-1/4 rounded-full bg-primary" />
                      <div className="h-1 w-1/4 rounded-full bg-slate-200 dark:bg-slate-700" />
                      <div className="h-1 w-1/4 rounded-full bg-slate-200 dark:bg-slate-700" />
                    </div>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                      Strength: Medium
                    </p>
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800"
                    />
                  </div>
                  <label
                    htmlFor="terms"
                    className="ml-3 text-xs leading-5 text-slate-600 dark:text-slate-400"
                  >
                    I agree to the{' '}
                    <button
                      type="button"
                      className="font-semibold text-primary hover:underline"
                    >
                      Terms and Conditions
                    </button>{' '}
                    and{' '}
                    <button
                      type="button"
                      className="font-semibold text-primary hover:underline"
                    >
                      Privacy Policy
                    </button>
                  </label>
                </div>

                {/* Error */}
                {error && (
                  <p className="text-sm font-medium text-red-600 dark:text-red-400">{error}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? 'Creating account...' : 'Create Account'}
                  {!isSubmitting && (
                    <span className="ml-2">
                      <ArrowForwardIcon fontSize="small" />
                    </span>
                  )}
                </button>
              </form>

              {/* SSO section (visual only) */}
              <div className="mt-8">
                <div className="relative">
                  <div aria-hidden="true" className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200 dark:border-slate-800" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-3 text-slate-500 dark:bg-slate-900 dark:text-slate-500">
                      Or sign up with
                    </span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
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
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    <svg
                      className="mr-2 h-4 w-4 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </button>
                </div>
              </div>
            </div>

            {/* Card footer */}
            <div className="border-t border-slate-100 bg-slate-50 px-8 py-5 text-center dark:border-slate-800 dark:bg-slate-800/50">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Already have an account?
                <button
                  type="button"
                  onClick={() => navigate(ROUTES.LOGIN)}
                  className="ml-1 font-bold text-primary hover:underline"
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>

          {/* Utility links */}
          <div className="mt-8 flex justify-center gap-6">
            <button
              type="button"
              className="text-xs text-slate-400 transition-colors hover:text-slate-600 dark:hover:text-slate-200"
            >
              Support
            </button>
            <button
              type="button"
              className="text-xs text-slate-400 transition-colors hover:text-slate-600 dark:hover:text-slate-200"
            >
              System Status
            </button>
            <button
              type="button"
              className="text-xs text-slate-400 transition-colors hover:text-slate-600 dark:hover:text-slate-200"
            >
              Documentation
            </button>
          </div>
        </div>

        {/* Security footer */}
        <div className="mt-12 flex items-center gap-2 text-slate-400">
          <VerifiedUserOutlinedIcon fontSize="inherit" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em]">
            Enterprise-Grade Security Standards
          </span>
        </div>
      </div>
    </div>
  )
}

