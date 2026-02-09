import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authApi } from '@/api/auth.api'
import { setCredentials } from '../auth.slice'
import { ROUTES } from '@/utils/constants'
import { consumePkceState } from '../pkce'

export function OidcCallback() {
  const [status, setStatus] = useState<'loading' | 'error'>('loading')
  const [message, setMessage] = useState<string | null>(null)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const run = async () => {
      const code = searchParams.get('code')
      const state = searchParams.get('state')
      const stored = consumePkceState()

      if (!code || !state || !stored || state !== stored.state) {
        setStatus('error')
        setMessage('Invalid sign-in response. Please try again.')
        return
      }

      try {
        const { data } = await authApi.exchangePkceCode({
          code,
          codeVerifier: stored.verifier,
          redirectUri: stored.redirectUri,
        })

        dispatch(setCredentials({ user: data.user, token: data.accessToken }))
        navigate(stored.redirectPath || ROUTES.DASHBOARD, { replace: true })
      } catch {
        setStatus('error')
        setMessage('Failed to complete sign in. Please try again.')
      }
    }

    void run()
  }, [dispatch, navigate, searchParams])

  if (status === 'error') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background-light px-4 text-center dark:bg-background-dark">
        <div className="max-w-md rounded-xl bg-white p-6 shadow-lg ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
          <h1 className="mb-2 text-lg font-semibold text-red-600 dark:text-red-400">
            Sign-in failed
          </h1>
          <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
            {message || 'Something went wrong during the sign-in process.'}
          </p>
          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
            onClick={() => navigate(ROUTES.LOGIN)}
          >
            Back to login
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background-light px-4 text-center dark:bg-background-dark">
      <p className="text-sm text-slate-600 dark:text-slate-300">
        Completing sign-in, please wait...
      </p>
    </div>
  )
}

