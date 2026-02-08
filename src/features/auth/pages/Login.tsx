import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, TextField, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Button } from '@/components/common/Button'
import { authApi } from '@/api/auth.api'
import { setCredentials } from '../auth.slice'
import { ROUTES } from '@/utils/constants'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      const { data } = await authApi.login({ email, password })
      dispatch(setCredentials({ user: data.user, token: data.accessToken }))
      navigate(ROUTES.DASHBOARD)
    } catch {
      setError('Invalid email or password')
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        p: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Servexa
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: 400 }}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          required
        />
        {error && (
          <Typography color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Sign In
        </Button>
        <Button
          fullWidth
          sx={{ mt: 1 }}
          onClick={() => navigate(ROUTES.FORGOT_PASSWORD)}
        >
          Forgot Password?
        </Button>
      </Box>
    </Box>
  )
}
