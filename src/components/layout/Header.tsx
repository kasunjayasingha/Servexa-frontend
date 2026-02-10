import { AppBar, Toolbar, Typography, Box, Avatar, Divider, IconButton, TextField, InputAdornment } from '@mui/material'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import { ThemeToggle } from '@/components/common/ThemeToggle'

export function Header() {
  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper',
      }}
    >
      <Toolbar sx={{ minHeight: 64, px: { xs: 2, md: 3 } }}>
        {/* Left: Branch selector */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            px: 1.5,
            py: 0.75,
            borderRadius: 1.5,
            border: 1,
            borderColor: 'divider',
          }}
        >
          <StorefrontOutlinedIcon fontSize="small" color="primary" />
          <Typography variant="body2">Downtown Branch</Typography>
        </Box>

        {/* Center: Global search */}
        <Box sx={{ flexGrow: 1, maxWidth: 420, mx: 3, display: { xs: 'none', md: 'block' } }}>
          <TextField
            size="small"
            fullWidth
            placeholder="Search orders, products, or staff..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon fontSize="small" color="disabled" />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Right: Controls and user */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, ml: 'auto' }}>
          <IconButton size="small" color="default">
            <NotificationsNoneOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" color="default">
            <HelpOutlineOutlinedIcon fontSize="small" />
          </IconButton>
          <ThemeToggle />

          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{ textAlign: 'right', display: { xs: 'none', sm: 'block' } }}>
              <Typography variant="body2" fontWeight={500}>
                Alex Rivera
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Business Owner
              </Typography>
            </Box>
            <Avatar sx={{ width: 32, height: 32 }}>AR</Avatar>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
