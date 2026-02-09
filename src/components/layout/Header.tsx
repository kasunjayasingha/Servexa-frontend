import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import { ThemeToggle } from '@/components/common/ThemeToggle'

export function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Servexa
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
