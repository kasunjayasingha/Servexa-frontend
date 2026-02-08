import { Box, CircularProgress } from '@mui/material'

interface LoaderProps {
  fullScreen?: boolean
}

export function Loader({ fullScreen = false }: LoaderProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: fullScreen ? '100vh' : 200,
      }}
    >
      <CircularProgress />
    </Box>
  )
}
