import { Grid, Paper, Box, Typography, Chip, Button, Card, CardContent, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, LinearProgress } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import HubIcon from '@mui/icons-material/Hub'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import InventoryIcon from '@mui/icons-material/Inventory'
import BadgeIcon from '@mui/icons-material/Badge'

const tenants = [
  { name: 'Lumina Retail Group', plan: 'Enterprise', status: 'Active', branches: 24, health: 98, color: '#10b981' },
  { name: 'Apex Solutions', plan: 'Starter', status: 'Trialing', branches: 1, health: 28, color: '#f59e0b', trial: '4 of 14' },
  { name: 'Velvet Bloom', plan: 'Enterprise', status: 'Active', branches: 8, health: 92, color: '#10b981' },
]

const auditLogs = [
  { time: 'Oct 24, 14:22:10', action: 'Module_Toggle_ON', user: 'A. Sterling', tenant: 'Lumina Retail', status: 'Success' },
  { time: 'Oct 24, 13:45:02', action: 'Subscription_Upgrade', user: 'System', tenant: 'Velvet Bloom', status: 'Success' },
  { time: 'Oct 24, 12:10:44', action: 'Tenant_Suspension', user: 'A. Sterling', tenant: 'DarkStar Est.', status: 'Success' },
  { time: 'Oct 24, 11:55:12', action: 'API_Key_Regeneration', user: 'J. Kent', tenant: 'Global API', status: 'Pending' },
]

export function PlatformSuperAdminDashboard() {
  return (
    <>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Box sx={{ p: 1, bgcolor: 'rgba(59, 130, 246, 0.1)', borderRadius: 2 }}>
                <GroupsIcon sx={{ color: '#3b82f6' }} />
              </Box>
              <Chip label="+12%" size="small" sx={{ bgcolor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', fontWeight: 'bold' }} />
            </Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>Total Active Businesses</Typography>
            <Typography variant="h4" fontWeight="bold">1,284</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Box sx={{ p: 1, bgcolor: 'rgba(75, 43, 238, 0.1)', borderRadius: 2 }}>
                <AccountBalanceWalletIcon sx={{ color: '#4b2bee' }} />
              </Box>
              <Chip label="+8.4%" size="small" sx={{ bgcolor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', fontWeight: 'bold' }} />
            </Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>Monthly Recurring Revenue</Typography>
            <Typography variant="h4" fontWeight="bold">$428,500</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Box sx={{ p: 1, bgcolor: 'rgba(245, 158, 11, 0.1)', borderRadius: 2 }}>
                <TrendingDownIcon sx={{ color: '#f59e0b' }} />
              </Box>
              <Chip label="-2.1%" size="small" sx={{ bgcolor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', fontWeight: 'bold' }} />
            </Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>Churn Rate (30d)</Typography>
            <Typography variant="h4" fontWeight="bold">1.8%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Box sx={{ p: 1, bgcolor: 'rgba(168, 85, 247, 0.1)', borderRadius: 2 }}>
                <HubIcon sx={{ color: '#a855f7' }} />
              </Box>
              <Chip label="Stable" size="small" />
            </Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>Avg. Branch Count</Typography>
            <Typography variant="h4" fontWeight="bold">4.2</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box mb={3}>
        <Typography variant="h6" fontWeight="bold" mb={2}>Recent Active Tenants</Typography>
        <Grid container spacing={3}>
          {tenants.map((tenant) => (
            <Grid item xs={12} md={4} key={tenant.name}>
              <Card>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" mb={2}>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">{tenant.name}</Typography>
                      <Chip label={tenant.plan} size="small" sx={{ mt: 0.5, bgcolor: tenant.plan === 'Enterprise' ? 'rgba(75, 43, 238, 0.1)' : 'action.hover', color: tenant.plan === 'Enterprise' ? '#4b2bee' : 'text.secondary', fontWeight: 'bold' }} />
                    </Box>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: tenant.color }} />
                  </Box>
                  <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={6}>
                      <Paper variant="outlined" sx={{ p: 1.5 }}>
                        <Typography variant="caption" color="text.secondary" fontWeight="bold">STATUS</Typography>
                        <Typography variant="body2" fontWeight="bold" sx={{ color: tenant.color }}>{tenant.status}</Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper variant="outlined" sx={{ p: 1.5 }}>
                        <Typography variant="caption" color="text.secondary" fontWeight="bold">BRANCHES</Typography>
                        <Typography variant="body2" fontWeight="bold">{tenant.branches} Units</Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                  <Box>
                    <Box display="flex" justifyContent="space-between" mb={1}>
                      <Typography variant="caption" color="text.secondary">{tenant.trial ? 'Trial Period (Days Left)' : 'Subscription Health'}</Typography>
                      <Typography variant="caption" fontWeight="bold" sx={{ color: tenant.trial ? '#f59e0b' : 'inherit' }}>{tenant.trial || `${tenant.health}%`}</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={tenant.health} sx={{ '& .MuiLinearProgress-bar': { bgcolor: tenant.color } }} />
                  </Box>
                </CardContent>
                <Box sx={{ px: 2, py: 1.5, bgcolor: 'action.hover', borderTop: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
                  <Button size="small">Manage Modules</Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={{ p: 3, borderBottom: 1, borderColor: 'divider' }}>
              <Typography variant="h6" fontWeight="bold">Global Modules</Typography>
              <Typography variant="caption" color="text.secondary">Platform-wide feature availability.</Typography>
            </Box>
            <Box sx={{ p: 3, flexGrow: 1 }}>
              <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ p: 1.5, mb: 2, bgcolor: 'action.hover', borderRadius: 2 }}>
                <Box display="flex" gap={1.5} alignItems="center">
                  <Box sx={{ p: 1, bgcolor: 'rgba(75, 43, 238, 0.1)', borderRadius: 1 }}>
                    <PointOfSaleIcon fontSize="small" sx={{ color: '#4b2bee' }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" fontWeight="bold">POS Core</Typography>
                    <Typography variant="caption" color="text.secondary">Standard checkout system</Typography>
                  </Box>
                </Box>
                <Switch defaultChecked />
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ p: 1.5, mb: 2, bgcolor: 'action.hover', borderRadius: 2 }}>
                <Box display="flex" gap={1.5} alignItems="center">
                  <Box sx={{ p: 1, bgcolor: 'rgba(16, 185, 129, 0.1)', borderRadius: 1 }}>
                    <InventoryIcon fontSize="small" sx={{ color: '#10b981' }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" fontWeight="bold">Inventory Pro</Typography>
                    <Typography variant="caption" color="text.secondary">Stock tracking & alerts</Typography>
                  </Box>
                </Box>
                <Switch defaultChecked />
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ p: 1.5, bgcolor: 'action.hover', borderRadius: 2 }}>
                <Box display="flex" gap={1.5} alignItems="center">
                  <Box sx={{ p: 1, bgcolor: 'rgba(245, 158, 11, 0.1)', borderRadius: 1 }}>
                    <BadgeIcon fontSize="small" sx={{ color: '#f59e0b' }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" fontWeight="bold">HR & Payroll</Typography>
                    <Typography variant="caption" color="text.secondary">Employee management</Typography>
                  </Box>
                </Box>
                <Switch />
              </Box>
            </Box>
            <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
              <Button fullWidth variant="outlined">Configure Override Rules</Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper>
            <Box sx={{ p: 3, borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="h6" fontWeight="bold">System Audit Log</Typography>
                <Typography variant="caption" color="text.secondary">Live platform administrative activity.</Typography>
              </Box>
              <Button size="small" sx={{ color: '#4b2bee', fontWeight: 'bold' }}>View Full Log</Button>
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Timestamp</TableCell>
                    <TableCell>Action</TableCell>
                    <TableCell>User</TableCell>
                    <TableCell>Target Tenant</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {auditLogs.map((log, idx) => (
                    <TableRow key={idx} hover>
                      <TableCell><Typography variant="caption" fontWeight="bold">{log.time}</Typography></TableCell>
                      <TableCell>{log.action}</TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center" gap={1}>
                          <Avatar sx={{ width: 20, height: 20, fontSize: 10 }}>{log.user.split(' ').map(n => n[0]).join('')}</Avatar>
                          {log.user}
                        </Box>
                      </TableCell>
                      <TableCell>{log.tenant}</TableCell>
                      <TableCell>
                        <Chip 
                          label={log.status} 
                          size="small" 
                          sx={{ 
                            bgcolor: log.status === 'Success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                            color: log.status === 'Success' ? '#10b981' : '#f59e0b',
                            fontWeight: 'bold'
                          }} 
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
