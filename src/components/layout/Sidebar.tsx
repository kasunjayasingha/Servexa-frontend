import {Avatar, Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography,} from '@mui/material'
import {useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {ROUTES} from '@/utils/constants'

import LayersIcon from '@mui/icons-material/Layers'
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import PaymentsIcon from '@mui/icons-material/Payments'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [inventoryOpen, setInventoryOpen] = useState(true)
  const [payrollOpen, setPayrollOpen] = useState(false)
  const [branchOpen, setBranchOpen] = useState(false)
  const [staffOpen, setStaffOpen] = useState(false)

  return (
    <Box
      sx={{
        width: 288,
        bgcolor: 'background.paper',
        borderRight: 1,
        borderColor: 'divider',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        left: 0,
        top: 0,
        overflow: 'hidden',
      }}
    >
      {/* Logo */}
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: 2,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <LayersIcon />
        </Box>
        <Typography variant="h6" fontWeight={700}>
          CloudmartPro
        </Typography>
      </Box>

      {/* Main Menu */}
      <Box sx={{ px: 2, mb: 1 }}>
        <Typography
          variant="caption"
          sx={{ fontWeight: 700, color: 'text.secondary', letterSpacing: 1.2, fontSize: 10 }}
        >
          MAIN MENU
        </Typography>
      </Box>

      <List sx={{ px: 2, flex: 1, overflow: 'auto' }}>
        {/* Dashboard */}
        <ListItemButton
          selected={location.pathname === ROUTES.DASHBOARD}
          onClick={() => navigate(ROUTES.DASHBOARD)}
          sx={{
            mb: 0.5,
            borderRadius: 2,
            borderRight: location.pathname === ROUTES.DASHBOARD ? 4 : 0,
            borderColor: 'primary.main',
            bgcolor: location.pathname === ROUTES.DASHBOARD ? 'rgba(43, 75, 238, 0.1)' : 'transparent',
            color: location.pathname === ROUTES.DASHBOARD ? 'primary.main' : 'text.primary',
            '&:hover': {
              bgcolor: location.pathname === ROUTES.DASHBOARD ? 'rgba(43, 75, 238, 0.15)' : 'action.hover',
            },
            '& .MuiListItemIcon-root': {
              color: location.pathname === ROUTES.DASHBOARD ? 'primary.main' : 'text.secondary',
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 36 }}>
            <SpaceDashboardOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }} />
        </ListItemButton>

        {/* Branch */}
        <ListItemButton
          onClick={() => setBranchOpen(!branchOpen)}
          sx={{ mb: 0.5, borderRadius: 2 }}
        >
          <ListItemIcon sx={{ minWidth: 36, color: 'text.secondary' }}>
            <StorefrontOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Branch" primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
          <ExpandMoreIcon
            sx={{
              fontSize: 18,
              transform: branchOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
            }}
          />
        </ListItemButton>
        <Collapse in={branchOpen} timeout="auto" unmountOnExit>
          <Box sx={{ pl: 5, pb: 0.5 }}>
            <Typography
              variant="body2"
              sx={{
                py: 0.75,
                fontSize: 13,
                color: 'text.secondary',
                cursor: 'pointer',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Overview
            </Typography>
            <Typography
              variant="body2"
              sx={{
                py: 0.75,
                fontSize: 13,
                color: 'text.secondary',
                cursor: 'pointer',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Branch List
            </Typography>
            <Typography
              variant="body2"
              sx={{
                py: 0.75,
                fontSize: 13,
                color: 'text.secondary',
                cursor: 'pointer',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Analytics
            </Typography>
          </Box>
        </Collapse>

        {/* Staff */}
        <ListItemButton
          onClick={() => setStaffOpen(!staffOpen)}
          sx={{ mb: 0.5, borderRadius: 2 }}
        >
          <ListItemIcon sx={{ minWidth: 36, color: 'text.secondary' }}>
            <PeopleAltOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Staff" primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
          <ExpandMoreIcon
            sx={{
              fontSize: 18,
              transform: staffOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
            }}
          />
        </ListItemButton>
        <Collapse in={staffOpen} timeout="auto" unmountOnExit>
          <Box sx={{ pl: 5, pb: 0.5 }}>
            <Typography
              variant="body2"
              sx={{
                py: 0.75,
                fontSize: 13,
                color: location.pathname === ROUTES.CUSTOMERS ? 'primary.main' : 'text.secondary',
                fontWeight: location.pathname === ROUTES.CUSTOMERS ? 600 : 400,
                cursor: 'pointer',
              }}
              onClick={() => navigate(ROUTES.CUSTOMERS)}
            >
              Directory
            </Typography>
            <Typography
              variant="body2"
              sx={{
                py: 0.75,
                fontSize: 13,
                color: 'text.secondary',
                cursor: 'pointer',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Performance
            </Typography>
            <Typography
              variant="body2"
              sx={{
                py: 0.75,
                fontSize: 13,
                color: 'text.secondary',
                cursor: 'pointer',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Attendance
            </Typography>
          </Box>
        </Collapse>

        {/* Payroll */}
        <ListItemButton
          onClick={() => setPayrollOpen(!payrollOpen)}
          sx={{ mb: 0.5, borderRadius: 2 }}
        >
          <ListItemIcon sx={{ minWidth: 36, color: 'text.secondary' }}>
            <PaymentsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Payroll" primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
          <ExpandMoreIcon
            sx={{
              fontSize: 18,
              transform: payrollOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
            }}
          />
        </ListItemButton>
        <Collapse in={payrollOpen} timeout="auto" unmountOnExit>
          <Box sx={{ pl: 5, pb: 0.5 }}>
            <Typography
              variant="body2"
              sx={{
                py: 0.75,
                fontSize: 13,
                color: 'text.secondary',
                cursor: 'pointer',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Overview
            </Typography>
            <Typography
              variant="body2"
              sx={{
                py: 0.75,
                fontSize: 13,
                color: 'text.secondary',
                cursor: 'pointer',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Payruns
            </Typography>
            <Typography
              variant="body2"
              sx={{
                py: 0.75,
                fontSize: 13,
                color: 'text.secondary',
                cursor: 'pointer',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Commissions
            </Typography>
            <Typography
              variant="body2"
              sx={{
                py: 0.75,
                fontSize: 13,
                color: 'text.secondary',
                cursor: 'pointer',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Rules
            </Typography>
          </Box>
        </Collapse>

        {/* Inventory */}
        <ListItemButton
          onClick={() => setInventoryOpen(!inventoryOpen)}
          sx={{ mb: 0.5, borderRadius: 2 }}
        >
          <ListItemIcon sx={{ minWidth: 36, color: 'text.secondary' }}>
            <Inventory2OutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Inventory" primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
          <ExpandMoreIcon
            sx={{
              fontSize: 18,
              transform: inventoryOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
            }}
          />
        </ListItemButton>
        <Collapse in={inventoryOpen} timeout="auto" unmountOnExit>
          <Box sx={{ pl: 5, pb: 0.5 }}>
            <Typography
              variant="body2"
              sx={{
                py: 0.75,
                fontSize: 13,
                color: location.pathname === ROUTES.INVENTORY ? 'primary.main' : 'text.secondary',
                fontWeight: location.pathname === ROUTES.INVENTORY ? 600 : 400,
                cursor: 'pointer',
              }}
              onClick={() => navigate(ROUTES.INVENTORY)}
            >
              Stock Level
            </Typography>
            <Typography
              variant="body2"
              sx={{
                py: 0.75,
                fontSize: 13,
                color: 'text.secondary',
                cursor: 'pointer',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Transfers
            </Typography>
            <Typography
              variant="body2"
              sx={{
                py: 0.75,
                fontSize: 13,
                color: 'text.secondary',
                cursor: 'pointer',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Suppliers
            </Typography>
          </Box>
        </Collapse>

        {/* Configuration Section */}
        <Box sx={{ mt: 2, mb: 1 }}>
          <Typography
            variant="caption"
            sx={{ fontWeight: 700, color: 'text.secondary', letterSpacing: 1.2, fontSize: 10 }}
          >
            CONFIGURATION
          </Typography>
        </Box>

        <ListItemButton sx={{ mb: 0.5, borderRadius: 2 }}>
          <ListItemIcon sx={{ minWidth: 36, color: 'text.secondary' }}>
            <SettingsOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Settings" primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
        </ListItemButton>
      </List>

      {/* User Profile at Bottom */}
      <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            p: 1,
            bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(148, 163, 184, 0.1)' : theme.palette.grey[50],
            borderRadius: 3,
          }}
        >
          <Avatar sx={{ width: 40, height: 40 }}>AT</Avatar>
          <Box sx={{ flex: 1, overflow: 'hidden' }}>
            <Typography variant="body2" fontWeight={700} noWrap>
              Alex Thompson
            </Typography>
            <Typography variant="caption" color="text.secondary" noWrap>
              Super Admin
            </Typography>
          </Box>
          <ListItemIcon
            sx={{
              minWidth: 'auto',
              color: 'text.secondary',
              cursor: 'pointer',
              '&:hover': { color: 'primary.main' },
            }}
          >
            <LogoutOutlinedIcon fontSize="small" />
          </ListItemIcon>
        </Box>
      </Box>
    </Box>
  )
}
