import { IconButton, Tooltip } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useColorMode } from '@/theme/ColorModeContext'

interface ThemeToggleProps {
  size?: 'small' | 'medium' | 'large'
}

export function ThemeToggle({ size = 'medium' }: ThemeToggleProps) {
  const { mode, toggleColorMode } = useColorMode()

  const isDark = mode === 'dark'

  return (
    <Tooltip title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
      <IconButton color="inherit" onClick={toggleColorMode} size={size}>
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  )
}

