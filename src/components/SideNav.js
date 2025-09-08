import { Drawer, Toolbar, Box, List, ListItemButton, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material'
import Home from '@mui/icons-material/Home';
import Group from '@mui/icons-material/Group';
import Lightbulb from '@mui/icons-material/Lightbulb';
import Diversity3 from '@mui/icons-material/Diversity3';
import Chat from '@mui/icons-material/Chat';
import Settings from '@mui/icons-material/Settings';
import Payment from '@mui/icons-material/Payment';
import Logout from '@mui/icons-material/Logout';
import { NavLink, useLocation } from 'react-router-dom'

const drawerWidth = 260

const navItems = [
  { label: 'Flow Deck', icon: <Home />, to: '/' },
  { label: 'Covenant', icon: <Group />, to: '/covenant' },
  { label: 'Startups', icon: <Lightbulb />, to: '/startups' },
  { label: 'AngelInv', icon: <Diversity3 />, to: '/angel-inv' },
  { label: 'Message', icon: <Chat />, to: '/chats' },
  { label: 'Settings', icon: <Settings />, to: '/setting' },
  { label: 'Payment', icon: <Payment />, to: '/payment' },
  { label: 'Logout', icon: <Logout />, to: '/logout' },
];

export default function SideNav({ mobileOpen, onClose }) {
  const location = useLocation()

  const content = (
    <>
      <Toolbar>
        <Box>
          <Typography variant="h5" fontWeight={800}>Capieron</Typography>
        </Box>
      </Toolbar>
      <Divider />
            <Toolbar>
        <Box>
          <Typography variant="h6" fontWeight={500}>Super Admin</Typography>
        </Box>
      </Toolbar>
       <Divider />
      <List>
        {navItems.map(item => (
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
