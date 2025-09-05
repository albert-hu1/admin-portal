import { useState } from 'react'
import { Box, Toolbar } from '@mui/material'
import { Outlet } from 'react-router-dom'
import TopBar from '../components/TopBar'
import SideNav from '../components/SideNav'

const drawerWidth = 260

export default function RootLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const toggleDrawer = () => setMobileOpen(!mobileOpen)

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <TopBar onMenuClick={toggleDrawer} />
      <SideNav mobileOpen={mobileOpen} onClose={toggleDrawer} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, md: 3 },
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}
