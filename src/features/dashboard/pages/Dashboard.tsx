import {
  Box,
  Grid,
  Paper,
  Typography,
  Stack,
  Button,
  Chip,
  Avatar,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Divider,
} from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import AddIcon from '@mui/icons-material/Add'
import PaymentsIcon from '@mui/icons-material/Payments'
import BadgeIcon from '@mui/icons-material/Badge'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import TabletMacIcon from '@mui/icons-material/TabletMac'
import HeadphonesIcon from '@mui/icons-material/Headphones'
import WatchIcon from '@mui/icons-material/Watch'
import DownloadIcon from '@mui/icons-material/Download'

type Kpi = {
  id: string
  label: string
  value: string
  change?: string
  helper?: string
  helperColor?: string
  icon: typeof PaymentsIcon
  iconBg: string
  iconColor?: string
}

const kpis: Kpi[] = [
  {
    id: 'totalSales',
    label: 'Total Sales',
    value: '$45,285.00',
    change: '+12.5%',
    icon: PaymentsIcon,
    iconBg: 'rgba(43, 75, 238, 0.06)',
    iconColor: 'primary.main',
  },
  {
    id: 'totalStaff',
    label: 'Total Staff',
    value: '128',
    helper: 'Active Now',
    icon: BadgeIcon,
    iconBg: 'rgba(79, 70, 229, 0.06)',
    iconColor: 'indigo.main',
  },
  {
    id: 'lowStock',
    label: 'Low Stock Alerts',
    value: '24',
    helper: 'Action Required',
    helperColor: 'warning.main',
    icon: PriorityHighIcon,
    iconBg: 'rgba(245, 158, 11, 0.06)',
    iconColor: 'warning.main',
  },
  {
    id: 'attendance',
    label: "Today's Attendance",
    value: '124/128',
    helper: '98.2%',
    helperColor: 'success.main',
    icon: CheckCircleIcon,
    iconBg: 'rgba(109, 40, 217, 0.06)',
    iconColor: 'secondary.main',
  },
]

const salesBars = [40, 65, 45, 80, 100, 75, 60, 50]
const salesLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', '']

const lowStockItems = [
  {
    name: 'iPad Air M1 64GB',
    sku: 'TAB-0421',
    left: 2,
    min: 10,
    severity: 'error',
    icon: TabletMacIcon,
  },
  {
    name: 'Sony WH-1000XM5',
    sku: 'AUD-8890',
    left: 5,
    min: 15,
    severity: 'error',
    icon: HeadphonesIcon,
  },
  {
    name: 'Watch Series 8',
    sku: 'WAT-1123',
    left: 8,
    min: 10,
    severity: 'warning',
    icon: WatchIcon,
  },
]

const transactions = [
  {
    id: '#TXN-7721',
    branch: 'Downtown Plaza',
    staff: 'Sarah Jenkins',
    date: 'Oct 18, 02:30 PM',
    amount: '$1,240.00',
    status: 'Completed',
    statusColor: 'success',
  },
  {
    id: '#TXN-7722',
    branch: 'Westside Mall',
    staff: 'Michael Ross',
    date: 'Oct 18, 01:15 PM',
    amount: '$845.50',
    status: 'Pending',
    statusColor: 'warning',
  },
  {
    id: '#TXN-7723',
    branch: 'Downtown Plaza',
    staff: 'Elena Rodriguez',
    date: 'Oct 18, 11:45 AM',
    amount: '$2,110.20',
    status: 'Completed',
    statusColor: 'success',
  },
]

export function Dashboard() {
  return (
    <Box
      sx={{
        p: 4,
        minHeight: '100%',
        bgcolor: (theme) => theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[50],
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'center' },
          justifyContent: 'space-between',
          gap: 2,
          mb: 4,
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight={700}>
            Business Overview
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Welcome back, Alex. Here&apos;s what&apos;s happening today.
          </Typography>
        </Box>

        <Stack direction="row" spacing={2} flexShrink={0}>
          <Button
            variant="outlined"
            startIcon={<CalendarTodayIcon fontSize="small" />}
            sx={{
              bgcolor: 'background.paper',
              borderRadius: 2,
              textTransform: 'none',
            }}
          >
            Oct 12, 2023 - Oct 18, 2023
          </Button>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              boxShadow: (theme) => `0 10px 25px ${theme.palette.primary.main}33`,
            }}
          >
            Generate Report
          </Button>
        </Stack>
      </Box>

      {/* KPI cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {kpis.map((kpi) => {
          const Icon = kpi.icon
          return (
            <Grid item xs={12} sm={6} md={3} key={kpi.id}>
              <Paper
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: 1,
                  borderColor: 'divider',
                  boxShadow: '0 8px 20px rgba(15,23,42,0.03)',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Box
                    sx={{
                      p: 1.25,
                      borderRadius: 2,
                      bgcolor: kpi.iconBg,
                      color: kpi.iconColor || 'primary.main',
                      display: 'inline-flex',
                    }}
                  >
                    <Icon fontSize="small" />
                  </Box>
                  {kpi.change && (
                    <Chip
                      size="small"
                      label={kpi.change}
                      sx={{
                        bgcolor: 'success.light',
                        color: 'success.dark',
                        fontWeight: 600,
                        fontSize: 10,
                        borderRadius: 999,
                      }}
                    />
                  )}
                  {kpi.helper && !kpi.change && (
                    <Typography variant="caption" color="text.secondary">
                      {kpi.helper}
                    </Typography>
                  )}
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {kpi.label}
                </Typography>
                <Typography variant="h5" fontWeight={700} sx={{ mt: 0.5 }}>
                  {kpi.value}
                </Typography>
                {kpi.helper && (
                  <Typography
                    variant="caption"
                    sx={{ mt: 0.5, display: 'block', color: kpi.helperColor || 'text.secondary' }}
                  >
                    {kpi.helper}
                  </Typography>
                )}
              </Paper>
            </Grid>
          )
        })}
      </Grid>

      {/* Main content */}
      <Grid container spacing={3}>
        {/* Sales + chart */}
        <Grid item xs={12} lg={8}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              border: 1,
              borderColor: 'divider',
              boxShadow: '0 8px 20px rgba(15,23,42,0.03)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: 3,
              }}
            >
              <Box>
                <Typography variant="subtitle1" fontWeight={700}>
                  Global Sales Performance
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Revenue distribution across all active branches
                </Typography>
              </Box>
              <Stack direction="row" spacing={1}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    borderRadius: 999,
                    textTransform: 'none',
                    px: 2,
                    py: 0.25,
                    fontSize: 11,
                  }}
                >
                  Weekly
                </Button>
                <Button
                  size="small"
                  variant="text"
                  sx={{
                    borderRadius: 999,
                    textTransform: 'none',
                    px: 2,
                    py: 0.25,
                    fontSize: 11,
                    color: 'text.secondary',
                  }}
                >
                  Monthly
                </Button>
              </Stack>
            </Box>

            {/* Simple bar chart mimic */}
            <Box
              sx={{
                position: 'relative',
                bgcolor: (theme) => theme.palette.grey[100],
                borderRadius: 2,
                p: 2,
                height: 260,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                overflow: 'hidden',
              }}
            >
              {salesBars.map((height, idx) => (
                <Box
                  key={idx}
                  sx={{
                    width: 28,
                    borderRadius: '12px 12px 0 0',
                    bgcolor: idx === 4 ? 'primary.main' : 'primary.main',
                    opacity: idx === 4 ? 1 : 0.25 + idx * 0.06,
                    height: `${height}%`,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}
                >
                  {idx === 4 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -32,
                        bgcolor: 'grey.900',
                        color: 'common.white',
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: 10,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      $12.4k (Today)
                    </Box>
                  )}
                </Box>
              ))}

              {/* Horizontal grid lines */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  p: 2,
                  pointerEvents: 'none',
                  opacity: 0.1,
                }}
              >
                <Divider />
                <Divider />
                <Divider />
                <Divider />
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 2,
                px: 1,
                typography: 'caption',
                color: 'text.secondary',
                fontWeight: 500,
              }}
            >
              {salesLabels.map((label, idx) => (
                <Box
                  key={label + idx}
                  sx={{
                    color: label === 'Fri' ? 'primary.main' : 'text.secondary',
                    fontWeight: label === 'Fri' ? 700 : 500,
                  }}
                >
                  {label}
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Right column widgets */}
        <Grid item xs={12} lg={4}>
          <Stack spacing={3}>
            {/* Low stock */}
            <Paper
              sx={{
                p: 3,
                borderRadius: 3,
                border: 1,
                borderColor: 'divider',
                boxShadow: '0 8px 20px rgba(15,23,42,0.03)',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 2,
                }}
              >
                <Typography variant="subtitle1" fontWeight={700}>
                  Low Stock Alert
                </Typography>
                <Button
                  size="small"
                  variant="text"
                  sx={{ fontSize: 11, fontWeight: 600, textTransform: 'none' }}
                >
                  View All
                </Button>
              </Box>

              <Stack spacing={2.5}>
                {lowStockItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Box
                      key={item.sku}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: 2,
                            bgcolor: 'grey.100',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'text.secondary',
                          }}
                        >
                          <Icon fontSize="small" />
                        </Box>
                        <Box>
                          <Typography
                            variant="body2"
                            fontWeight={600}
                            sx={{ '&:hover': { color: 'primary.main' }, cursor: 'pointer' }}
                          >
                            {item.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            SKU: {item.sku}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography
                          variant="body2"
                          fontWeight={700}
                          color={item.severity === 'error' ? 'error.main' : 'warning.main'}
                        >
                          {item.left} left
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Min: {item.min}
                        </Typography>
                      </Box>
                    </Box>
                  )
                })}
              </Stack>
            </Paper>

            {/* Attendance */}
            <Paper
              sx={{
                p: 3,
                borderRadius: 3,
                border: 1,
                borderColor: 'divider',
                boxShadow: '0 8px 20px rgba(15,23,42,0.03)',
              }}
            >
              <Typography variant="subtitle1" fontWeight={700} mb={2}>
                Today&apos;s Attendance
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                {/* Simple circular meter */}
                <Box
                  sx={{
                    position: 'relative',
                    width: 96,
                    height: 96,
                    borderRadius: '50%',
                    background: (theme) =>
                      `conic-gradient(${theme.palette.primary.main} 0deg 345deg, ${theme.palette.grey[200]} 345deg 360deg)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: 72,
                      height: 72,
                      borderRadius: '50%',
                      bgcolor: 'background.paper',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography variant="h6" fontWeight={700}>
                      96%
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="caption" color="text.secondary">
                      Present
                    </Typography>
                    <Typography variant="caption" fontWeight={700}>
                      124
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={96}
                    sx={{
                      height: 6,
                      borderRadius: 999,
                      mb: 1.5,
                      '& .MuiLinearProgress-bar': { bgcolor: 'success.main' },
                    }}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="caption" color="text.secondary">
                      Absent / Leave
                    </Typography>
                    <Typography variant="caption" fontWeight={700}>
                      4
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={4}
                    sx={{
                      height: 6,
                      borderRadius: 999,
                      '& .MuiLinearProgress-bar': { bgcolor: 'error.main' },
                    }}
                  />
                </Box>
              </Box>
            </Paper>
          </Stack>
        </Grid>
      </Grid>

      {/* Recent transactions */}
      <Paper
        sx={{
          mt: 4,
          borderRadius: 3,
          border: 1,
          borderColor: 'divider',
          boxShadow: '0 8px 20px rgba(15,23,42,0.03)',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            p: 3,
            borderBottom: 1,
            borderColor: 'divider',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="subtitle1" fontWeight={700}>
            Recent Branch Transactions
          </Typography>
          <Button
            size="small"
            variant="text"
            startIcon={<DownloadIcon fontSize="small" />}
            sx={{ textTransform: 'none', fontWeight: 600 }}
          >
            Download CSV
          </Button>
        </Box>

        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Transaction ID</TableCell>
                <TableCell>Branch</TableCell>
                <TableCell>Staff Member</TableCell>
                <TableCell>Date &amp; Time</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((txn) => (
                <TableRow key={txn.id} hover>
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{ fontFamily: 'monospace', fontSize: 13 }}
                    >
                      {txn.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight={600}>
                      {txn.branch}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar
                        sx={{ width: 24, height: 24, fontSize: 12, bgcolor: 'primary.light' }}
                      >
                        {txn.staff
                          .split(' ')
                          .map((p) => p[0])
                          .join('')}
                      </Avatar>
                      <Typography variant="body2">{txn.staff}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {txn.date}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight={700}>
                      {txn.amount}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      size="small"
                      label={txn.status}
                      color={txn.statusColor as 'success' | 'warning'}
                      variant={txn.statusColor === 'warning' ? 'outlined' : 'filled'}
                      sx={{
                        fontSize: 10,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        borderRadius: 999,
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box
          sx={{
            p: 2,
            textAlign: 'center',
            bgcolor: (theme) => theme.palette.grey[50],
          }}
        >
          <Button
            size="small"
            variant="text"
            sx={{ textTransform: 'none', fontWeight: 600, color: 'text.secondary' }}
          >
            Load more transactions
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}
