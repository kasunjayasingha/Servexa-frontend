import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import { ROUTES } from '@/utils/constants'

const navItems = [
  { path: ROUTES.DASHBOARD, label: 'Dashboard' },
  { path: ROUTES.BUSINESS_OWNER_DASHBOARD, label: 'Business Owner' },
  { path: ROUTES.PLATFORM_ADMIN_DASHBOARD, label: 'Platform Admin' },
  { path: ROUTES.STAFF_DASHBOARD, label: 'Staff Operations' },
  { path: ROUTES.CUSTOMERS, label: 'Customers' },
  { path: ROUTES.INVENTORY, label: 'Inventory' },
]

export function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Box
      sx={{
        width: 240,
        bgcolor: 'background.paper',
        borderRight: 1,
        borderColor: 'divider',
        minHeight: '100vh',
      }}
    >
      <List>
        {navItems.map(({ path, label }) => (
          <ListItem key={path} disablePadding>
            <ListItemButton
              selected={location.pathname.startsWith(path)}
              onClick={() => navigate(path)}
            >
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
