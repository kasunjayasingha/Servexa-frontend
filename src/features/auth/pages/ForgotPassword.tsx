import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { authApi } from '@/api/auth.api'
import { ROUTES } from '@/utils/constants'

export function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return

    setError('')
    setMessage('')
    setIsSubmitting(true)
    try {
      await authApi.forgotPassword(email)
      setMessage('Check your email for reset instructions.')
    } catch {
      setError('Failed to send reset email.')
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

        <div className="relative z-10 w-full max-w-md">
          {/* Branding */}
          <div className="mb-10 flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30">
              <span className="text-2xl font-semibold">S</span>
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Enterprise SaaS
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Microservices management for modern teams
            </p>
          </div>

          {/* Card */}
          <div className="overflow-hidden rounded-xl bg-white shadow-xl shadow-slate-200/50 ring-1 ring-slate-200 dark:bg-slate-900 dark:shadow-none dark:ring-slate-800">
            <div className="p-8 sm:p-10">
              <div className="mb-8 text-left">
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                  Reset Password
                </h1>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Enter your email to receive a password reset link.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700 dark:text-slate-300"
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
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="block w-full rounded-lg border border-slate-300 bg-white px-10 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
                    />
                  </div>
                </div>

                {/* Error / success */}
                {error && (
                  <p className="text-sm font-medium text-red-600 dark:text-red-400">{error}</p>
                )}
                {message && (
                  <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    {message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending link...' : 'Send Reset Link'}
                  {!isSubmitting && (
                    <span className="ml-2">
                      <ForwardToInboxIcon fontSize="small" />
                    </span>
                  )}
                </button>
              </form>
            </div>

            {/* Card Footer */}
            <div className="bg-slate-50 px-8 py-4 text-center dark:bg-slate-800/50">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Remember your password?
                <button
                  type="button"
                  onClick={() => navigate(ROUTES.LOGIN)}
                  className="ml-1 inline-flex items-center font-bold text-primary hover:underline"
                >
                  Back to login
                </button>
              </p>
            </div>
          </div>

          {/* Utility Links */}
          <div className="mt-8 flex justify-center gap-6">
            <button
              type="button"
              className="text-xs text-slate-400 transition-colors hover:text-slate-600"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              className="text-xs text-slate-400 transition-colors hover:text-slate-600"
            >
              Terms of Service
            </button>
            <button
              type="button"
              className="text-xs text-slate-400 transition-colors hover:text-slate-600"
            >
              Help Center
            </button>
          </div>
        </div>

        {/* Security Badge */}
        <div className="mt-auto pt-10">
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldOutlinedIcon fontSize="inherit" />
            <span className="text-[10px] font-semibold uppercase tracking-widest">
              AES-256 Bit Encrypted Connection
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
