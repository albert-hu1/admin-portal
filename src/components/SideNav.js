import { Drawer, Toolbar, Box, List, ListItemButton, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import BusinessIcon from '@mui/icons-material/Business'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import LayersIcon from '@mui/icons-material/Layers'
import ChatIcon from '@mui/icons-material/Chat'
import { NavLink, useLocation } from 'react-router-dom'

const drawerWidth = 260

const items = [
//   { label: 'Dashboard', icon: <DashboardIcon />, to: '/dashboard' },
  { label: 'Startups', icon: <RocketLaunchIcon />, to: '/startups' },
  { label: 'AngelInv', icon: <Diversity3Icon />, to: '/angel-inv' },
  { label: 'VC Firm', icon: <BusinessIcon />, to: '/vc-firm' },
  { label: 'Admins', icon: <AdminPanelSettingsIcon />, to: '/admins' },
  { label: 'Stacks', icon: <LayersIcon />, to: '/stacks' },
  { label: 'Chat', icon: <ChatIcon />, to: '/chat' },
//   { label: 'Founders', icon: <GroupIcon />, to: '/founders' },
]

export default function SideNav({ mobileOpen, onClose }) {
  const location = useLocation()

  const content = (
    <>
      <Toolbar>
        <Box>
          <Typography variant="h6" fontWeight={800}>Capieron</Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>Super Admin</Typography>
        </Box>
      </Toolbar>
      <Divider />
      <List>
        {items.map(item => (
          <ListItemButton
            key={item.to}
            component={NavLink}
            to={item.to}
            selected={location.pathname === item.to}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </>
  )

  return (
    <>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { width: drawerWidth } }}
      >
        {content}
      </Drawer>
      <Drawer
        variant="permanent"
        open
        sx={{ display: { xs: 'none', md: 'block' }, '& .MuiDrawer-paper': { width: drawerWidth } }}
      >
        {content}
      </Drawer>
    </>
  )
}
