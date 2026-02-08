import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { Button } from '@/components/common/Button'
import { Loader } from '@/components/common/Loader'
import { customerApi, Customer } from '../customer.api'

export function CustomerDetails() {
  const { id } = useParams<{ id: string }>()
  const [customer, setCustomer] = useState<Customer | null>(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (!id) return
    customerApi
      .getById(id)
      .then(({ data }) => setCustomer(data))
      .catch(() => setCustomer(null))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <Loader />
  if (!customer) return <Typography>Customer not found</Typography>

  return (
    <Box sx={{ p: 2 }}>
      <Button onClick={() => navigate('/customers')} sx={{ mb: 2 }}>
        Back
      </Button>
      <Typography variant="h5" gutterBottom>
        {customer.name}
      </Typography>
      <Typography>Email: {customer.email}</Typography>
      {customer.phone && <Typography>Phone: {customer.phone}</Typography>}
      {customer.address && <Typography>Address: {customer.address}</Typography>}
    </Box>
  )
}
