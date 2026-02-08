import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, TextField, Typography } from '@mui/material'
import { Button } from '@/components/common/Button'
import { authApi } from '@/api/auth.api'
import { ROUTES } from '@/utils/constants'

export function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')
    try {
      await authApi.forgotPassword(email)
      setMessage('Check your email for reset instructions.')
    } catch {
      setError('Failed to send reset email.')
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
        Forgot Password
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
        {error && (
          <Typography color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
        {message && (
          <Typography color="success.main" sx={{ mt: 1 }}>
            {message}
          </Typography>
        )}
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Send Reset Link
        </Button>
        <Button fullWidth sx={{ mt: 1 }} onClick={() => navigate(ROUTES.LOGIN)}>
          Back to Login
        </Button>
      </Box>
    </Box>
  )
}
