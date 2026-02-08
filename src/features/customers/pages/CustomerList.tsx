import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { customerApi, Customer } from '../customer.api'
import { Loader } from '@/components/common/Loader'

export function CustomerList() {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    customerApi
      .getAll()
      .then(({ data }) => setCustomers(data))
      .catch(() => setCustomers([]))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <Loader />

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Customers
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow
                key={customer.id}
                hover
                sx={{ cursor: 'pointer' }}
                onClick={() => navigate(`/customers/${customer.id}`)}
              >
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone || '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
