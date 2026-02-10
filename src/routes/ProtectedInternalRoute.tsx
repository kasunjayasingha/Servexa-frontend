import {Navigate, Outlet} from 'react-router-dom'
import {Box} from '@mui/material'
import {Sidebar} from '@/components/layout/Sidebar'
import {Header} from '@/components/layout/Header'
import {useAuth} from '@/hooks/useAuth'
import {ROUTES} from '@/utils/constants'

export function ProtectedInternalRoute() {
    const {isAuthenticated} = useAuth()

    if (!isAuthenticated) {
        return <Navigate to={ROUTES.LOGIN} replace/>
    }

    return (
        <Box sx={{display: 'flex', height: '100vh', overflow: 'hidden'}}>
            <Sidebar/>
            <Box sx={{flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', ml: '288px'}}>
                <Header/>
                <Box component="main" sx={{flex: 1, overflow: 'auto'}}>
                    <Outlet/>
                </Box>
            </Box>
        </Box>
    )
}
