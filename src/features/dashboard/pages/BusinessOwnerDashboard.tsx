import { Grid, Paper, Box, Typography, Chip, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, LinearProgress } from '@mui/material'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import PaymentsIcon from '@mui/icons-material/Payments'
import StoreIcon from '@mui/icons-material/Store'
import GroupIcon from '@mui/icons-material/Group'
import InventoryIcon from '@mui/icons-material/Inventory'
import InsightsIcon from '@mui/icons-material/Insights'
import WarningIcon from '@mui/icons-material/Warning'
import ApartmentIcon from '@mui/icons-material/Apartment'

const branchData = [
  { name: 'NY', value: 40 },
  { name: 'LDN', value: 60 },
  { name: 'TK', value: 90 },
  { name: 'PAR', value: 50 },
  { name: 'SYD', value: 70 },
  { name: 'BER', value: 45 },
]

const branches = [
  { location: 'Tokyo Hub', district: 'Shibuya District, JP', manager: 'Kenji Tanaka', staff: '28 Active', revenue: '$18,420.50', status: 'Healthy' },
  { location: 'London HQ', district: 'Soho Square, UK', manager: 'Sarah Jenkins', staff: '42 Active', revenue: '$12,900.00', status: 'Healthy' },
  { location: 'Paris Loft', district: 'Le Marais, FR', manager: 'Marc Dupond', staff: '15 Active', revenue: '$6,210.00', status: 'Warning' },
]

export function BusinessOwnerDashboard() {
  return (
    <>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Box sx={{ p: 1, bgcolor: 'rgba(16, 185, 129, 0.1)', borderRadius: 2 }}>
                <PaymentsIcon sx={{ color: '#10b981' }} />
              </Box>
              <Chip label="+12.5%" size="small" sx={{ bgcolor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', fontWeight: 'bold' }} />
            </Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>Total Enterprise Revenue</Typography>
            <Typography variant="h5" fontWeight="bold">$452,890.00</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Box sx={{ p: 1, bgcolor: 'rgba(43, 75, 238, 0.1)', borderRadius: 2 }}>
                <StoreIcon sx={{ color: '#2b4bee' }} />
              </Box>
              <Typography variant="caption" color="text.secondary">8 Active</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>Total Branches</Typography>
            <Typography variant="h5" fontWeight="bold">12 Locations</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Box sx={{ p: 1, bgcolor: 'rgba(245, 158, 11, 0.1)', borderRadius: 2 }}>
                <GroupIcon sx={{ color: '#f59e0b' }} />
              </Box>
            </Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>Total Staff Count</Typography>
            <Typography variant="h5" fontWeight="bold">142 Employees</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Box sx={{ p: 1, bgcolor: 'rgba(239, 68, 68, 0.1)', borderRadius: 2 }}>
                <InventoryIcon sx={{ color: '#ef4444' }} />
              </Box>
              <Chip label="3 Alerts" size="small" sx={{ bgcolor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', fontWeight: 'bold' }} />
            </Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>Stock Health Score</Typography>
            <Typography variant="h5" fontWeight="bold">92.4%</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>Revenue Performance by Branch</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={branchData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#2b4bee" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>Strategic Insights</Typography>
            <Box display="flex" gap={2} mb={3}>
              <Box sx={{ width: 40, height: 40, bgcolor: 'rgba(43, 75, 238, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <InsightsIcon sx={{ color: '#2b4bee', fontSize: 20 }} />
              </Box>
              <Box>
                <Typography variant="body2" fontWeight="bold">Expand Tokyo Hub</Typography>
                <Typography variant="caption" color="text.secondary">Tokyo branch is operating at 98% capacity. Consider adding 2 more checkout terminals.</Typography>
              </Box>
            </Box>
            <Box display="flex" gap={2} mb={3}>
              <Box sx={{ width: 40, height: 40, bgcolor: 'rgba(245, 158, 11, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <WarningIcon sx={{ color: '#f59e0b', fontSize: 20 }} />
              </Box>
              <Box>
                <Typography variant="body2" fontWeight="bold">Stock Imbalance</Typography>
                <Typography variant="caption" color="text.secondary">Excess electronics in London while Paris reports shortages. Internal transfer recommended.</Typography>
              </Box>
            </Box>
            <Box sx={{ pt: 3, borderTop: 1, borderColor: 'divider' }}>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography variant="body2" color="text.secondary">Monthly Goal Progress</Typography>
                <Typography variant="body2" color="#2b4bee" fontWeight="bold">82%</Typography>
              </Box>
              <LinearProgress variant="determinate" value={82} sx={{ '& .MuiLinearProgress-bar': { bgcolor: '#2b4bee' } }} />
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Paper>
        <Box sx={{ p: 3, borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h6" fontWeight="bold">Branch Health Status</Typography>
            <Typography variant="caption" color="text.secondary">Real-time oversight across your enterprise footprint</Typography>
          </Box>
          <Button variant="outlined" size="small">Export Table</Button>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Branch Location</TableCell>
                <TableCell>Manager</TableCell>
                <TableCell>Staff</TableCell>
                <TableCell>Daily Revenue</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {branches.map((branch) => (
                <TableRow key={branch.location} hover>
                  <TableCell>
                    <Box display="flex" gap={1.5} alignItems="center">
                      <Box sx={{ width: 32, height: 32, bgcolor: 'action.hover', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ApartmentIcon fontSize="small" color="action" />
                      </Box>
                      <Box>
                        <Typography variant="body2" fontWeight="600">{branch.location}</Typography>
                        <Typography variant="caption" color="text.secondary">{branch.district}</Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{branch.manager}</TableCell>
                  <TableCell>{branch.staff}</TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight="bold" color={branch.status === 'Healthy' ? '#10b981' : '#f59e0b'}>
                      {branch.revenue}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Chip 
                      label={branch.status} 
                      size="small" 
                      sx={{ 
                        bgcolor: branch.status === 'Healthy' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                        color: branch.status === 'Healthy' ? '#10b981' : '#f59e0b',
                        fontWeight: 'bold'
                      }} 
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ p: 2, textAlign: 'center', borderTop: 1, borderColor: 'divider' }}>
          <Button size="small" sx={{ color: '#2b4bee', fontWeight: 'bold' }}>View All 12 Branches</Button>
        </Box>
      </Paper>
    </>
  )
}
