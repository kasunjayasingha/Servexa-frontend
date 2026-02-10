import { Box, Grid, Paper, Typography, Button, Checkbox, Chip } from '@mui/material'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import InventoryIcon from '@mui/icons-material/Inventory'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import QrCode2Icon from '@mui/icons-material/QrCode2'
import ScheduleIcon from '@mui/icons-material/Schedule'
import VerifiedIcon from '@mui/icons-material/Verified'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'
import EventNoteIcon from '@mui/icons-material/EventNote'
import WarningIcon from '@mui/icons-material/Warning'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty'

const tasks = [
  { title: 'Expiring Stock Check: Dairy Aisle', due: 'Due by 11:30 AM • Priority High', priority: 'Urgent', color: '#ef4444' },
  { title: 'Shelf Restock: Organic Snacks', due: 'Inventory arrived 20 mins ago', priority: 'Medium', color: '#3b82f6' },
  { title: 'Process Online Returns (Batch #882)', due: '3 items pending validation', priority: 'Standard', color: '#6b7280' },
]

const schedule = [
  { time: '08:00 AM', title: 'Shift Start / Morning Briefing', location: 'Main Conference Hall • Lead by Sarah M.', active: true },
  { time: '10:30 AM', title: 'Inventory Audit: Section B', location: 'Assigned Partner: John Doe', active: false },
  { time: '01:00 PM', title: 'Scheduled Lunch Break', location: 'Staff Lounge • 45 Minutes', active: false },
  { time: '02:30 PM', title: 'POS Counter Duty (Counter 4)', location: 'Afternoon Peak Support', active: false },
]

const stockAlerts = [
  { type: 'error', title: 'Out of Stock', item: 'Organic Milk 2L (SKU: 992-B)' },
  { type: 'warning', title: 'Low Stock (5 units)', item: 'Gourmet Coffee Beans 500g' },
  { type: 'warning', title: 'Low Stock (2 units)', item: 'Extra Virgin Olive Oil 1L' },
]

const recentSales = [
  { id: '#ORD-28194', time: '2 mins ago', items: 3, amount: '$42.00' },
  { id: '#ORD-28193', time: '8 mins ago', items: 12, amount: '$218.40' },
  { id: '#ORD-28192', time: '15 mins ago', items: 1, amount: '$12.50' },
  { id: '#ORD-28191', time: '22 mins ago', items: 5, amount: '$89.10' },
]

export function StaffOperationalDashboard() {
  return (
    <>
      <Box mb={3}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h6" fontWeight="bold">Quick Operations</Typography>
          <Typography variant="caption" color="text.secondary">Last login: 08:30 AM Today</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Button fullWidth variant="contained" sx={{ p: 2, bgcolor: '#2b4bee', justifyContent: 'flex-start', height: '100%' }}>
              <Box display="flex" gap={2} alignItems="center">
                <Box sx={{ p: 1.5, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 2 }}>
                  <PointOfSaleIcon />
                </Box>
                <Box textAlign="left">
                  <Typography variant="body2" fontWeight="bold">POS Billing</Typography>
                  <Typography variant="caption">Launch checkout</Typography>
                </Box>
              </Box>
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, height: '100%', cursor: 'pointer', '&:hover': { borderColor: '#2b4bee' }, border: 1, borderColor: 'divider' }}>
              <Box display="flex" gap={2} alignItems="center">
                <Box sx={{ p: 1.5, bgcolor: 'action.hover', borderRadius: 2 }}>
                  <AddShoppingCartIcon />
                </Box>
                <Box>
                  <Typography variant="body2" fontWeight="bold">Stock Entry</Typography>
                  <Typography variant="caption" color="text.secondary">Record inventory</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, height: '100%', cursor: 'pointer', '&:hover': { borderColor: '#2b4bee' }, border: 1, borderColor: 'divider' }}>
              <Box display="flex" gap={2} alignItems="center">
                <Box sx={{ p: 1.5, bgcolor: 'action.hover', borderRadius: 2 }}>
                  <AccessTimeIcon />
                </Box>
                <Box>
                  <Typography variant="body2" fontWeight="bold">Attendance</Typography>
                  <Typography variant="caption" color="text.secondary">Clock In/Out</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, height: '100%', cursor: 'pointer', '&:hover': { borderColor: '#2b4bee' }, border: 1, borderColor: 'divider' }}>
              <Box display="flex" gap={2} alignItems="center">
                <Box sx={{ p: 1.5, bgcolor: 'action.hover', borderRadius: 2 }}>
                  <InventoryIcon />
                </Box>
                <Box>
                  <Typography variant="body2" fontWeight="bold">Returns</Typography>
                  <Typography variant="caption" color="text.secondary">Process refund</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={6} md={3}>
          <Paper sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="caption" color="text.secondary" fontWeight="bold">PERSONAL SALES</Typography>
              <Typography variant="h5" fontWeight="bold">$1,240.50</Typography>
            </Box>
            <Box sx={{ p: 1.5, bgcolor: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%' }}>
              <TrendingUpIcon sx={{ color: '#3b82f6' }} />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="caption" color="text.secondary" fontWeight="bold">ITEMS PROCESSED</Typography>
              <Typography variant="h5" fontWeight="bold">142</Typography>
            </Box>
            <Box sx={{ p: 1.5, bgcolor: 'rgba(168, 85, 247, 0.1)', borderRadius: '50%' }}>
              <QrCode2Icon sx={{ color: '#a855f7' }} />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="caption" color="text.secondary" fontWeight="bold">HOURS LOGGED</Typography>
              <Typography variant="h5" fontWeight="bold">6.5h</Typography>
            </Box>
            <Box sx={{ p: 1.5, bgcolor: 'rgba(249, 115, 22, 0.1)', borderRadius: '50%' }}>
              <ScheduleIcon sx={{ color: '#f97316' }} />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="caption" color="text.secondary" fontWeight="bold">EFFICIENCY RATE</Typography>
              <Typography variant="h5" fontWeight="bold">98.2%</Typography>
            </Box>
            <Box sx={{ p: 1.5, bgcolor: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%' }}>
              <VerifiedIcon sx={{ color: '#10b981' }} />
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ mb: 3 }}>
            <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
              <Box display="flex" gap={1} alignItems="center">
                <AssignmentTurnedInIcon sx={{ color: '#2b4bee' }} />
                <Typography variant="h6" fontWeight="bold">Pending Tasks</Typography>
              </Box>
              <Chip label="5 Tasks Remaining" size="small" />
            </Box>
            {tasks.map((task, idx) => (
              <Box key={idx} sx={{ p: 2, borderBottom: 1, borderColor: 'divider', display: 'flex', gap: 2, alignItems: 'center', '&:hover': { bgcolor: 'action.hover' } }}>
                <Checkbox />
                <Box flex={1}>
                  <Typography variant="body2" fontWeight="bold">{task.title}</Typography>
                  <Typography variant="caption" color="text.secondary">{task.due}</Typography>
                </Box>
                <Chip label={task.priority} size="small" sx={{ bgcolor: `${task.color}15`, color: task.color, fontWeight: 'bold' }} />
              </Box>
            ))}
            <Button fullWidth sx={{ py: 1.5 }}>View All Tasks</Button>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Box display="flex" gap={1} alignItems="center" mb={3}>
              <EventNoteIcon sx={{ color: '#2b4bee' }} />
              <Typography variant="h6" fontWeight="bold">Today's Schedule</Typography>
            </Box>
            {schedule.map((item, idx) => (
              <Box key={idx} sx={{ display: 'flex', gap: 2, mb: 3, position: 'relative', pl: 4 }}>
                <Box sx={{ position: 'absolute', left: 0, top: 6, width: 12, height: 12, borderRadius: '50%', border: 3, borderColor: item.active ? '#2b4bee' : 'grey.400', bgcolor: 'background.paper' }} />
                <Box flex={1}>
                  <Typography variant="body2" fontWeight="bold">{item.title}</Typography>
                  <Typography variant="caption" color="text.secondary">{item.location}</Typography>
                </Box>
                <Typography variant="caption" fontWeight="bold" color="text.secondary">{item.time}</Typography>
              </Box>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ mb: 3 }}>
            <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider', display: 'flex', gap: 1, alignItems: 'center' }}>
              <WarningIcon sx={{ color: '#f59e0b' }} />
              <Typography variant="subtitle2" fontWeight="bold">Stock Alerts</Typography>
            </Box>
            <Box sx={{ p: 2 }}>
              {stockAlerts.map((alert, idx) => (
                <Paper key={idx} variant="outlined" sx={{ p: 1.5, mb: 1.5, bgcolor: alert.type === 'error' ? 'rgba(239, 68, 68, 0.05)' : 'rgba(245, 158, 11, 0.05)', borderColor: alert.type === 'error' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(245, 158, 11, 0.1)' }}>
                  <Box display="flex" gap={1.5}>
                    {alert.type === 'error' ? <ErrorOutlineIcon sx={{ color: '#ef4444' }} fontSize="small" /> : <HourglassEmptyIcon sx={{ color: '#f59e0b' }} fontSize="small" />}
                    <Box>
                      <Typography variant="caption" fontWeight="bold">{alert.title}</Typography>
                      <Typography variant="caption" display="block" color="text.secondary">{alert.item}</Typography>
                    </Box>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Paper>

          <Paper>
            <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider', display: 'flex', gap: 1, alignItems: 'center' }}>
              <ReceiptLongIcon sx={{ color: '#10b981' }} />
              <Typography variant="subtitle2" fontWeight="bold">Recent Sales</Typography>
            </Box>
            {recentSales.map((sale, idx) => (
              <Box key={idx} sx={{ p: 2, borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="caption" fontWeight="bold">{sale.id}</Typography>
                  <Typography variant="caption" display="block" color="text.secondary">{sale.time} • {sale.items} Items</Typography>
                </Box>
                <Typography variant="body2" fontWeight="bold" sx={{ color: '#10b981' }}>{sale.amount}</Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
