import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import type { PaletteMode } from '@mui/material'

interface ColorModeContextValue {
  mode: PaletteMode
  toggleColorMode: () => void
}

const ColorModeContext = createContext<ColorModeContextValue | undefined>(undefined)

export function useColorMode() {
  const ctx = useContext(ColorModeContext)
  if (!ctx) {
    throw new Error('useColorMode must be used within ColorModeProvider')
  }
  return ctx
}

interface ColorModeProviderProps {
  children: React.ReactNode
}

export function ColorModeProvider({ children }: ColorModeProviderProps) {
  const [mode, setMode] = useState<PaletteMode>(() => {
    if (typeof window === 'undefined') return 'light'

    const stored = window.localStorage.getItem('color-mode')
    if (stored === 'light' || stored === 'dark') return stored

    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    if (typeof document === 'undefined') return
    const root = document.documentElement

    if (mode === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    window.localStorage.setItem('color-mode', mode)
  }, [mode])

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#2b4bee',
          },
          secondary: {
            main: '#6d28d9',
          },
          ...(mode === 'dark'
            ? {
                background: {
                  default: '#0f172a',
                  paper: '#1e293b',
                },
                divider: 'rgba(148, 163, 184, 0.12)',
              }
            : {
                background: {
                  default: '#f8fafc',
                  paper: '#ffffff',
                },
              }),
        },
        typography: {
          fontFamily: 'Inter, system-ui, sans-serif',
        },
        shape: {
          borderRadius: 8,
        },
      }),
    [mode],
  )

  const value = useMemo<ColorModeContextValue>(
    () => ({
      mode,
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    [mode],
  )

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

