import { AppBar, Toolbar, IconButton, Typography, Box, Badge } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'

export default function TopBar({ onMenuClick }) {
  return (
    <AppBar position="fixed" elevation={1}>
      <Toolbar sx={{ gap: 2 }}>
        <IconButton edge="start" onClick={onMenuClick} sx={{ display: { md: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ display: { xs: 'none', md: 'block' } }}>Super Admin</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Badge badgeContent={3} color="secondary" sx={{ ml: 1 }}>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
        </Badge>
      </Toolbar>
    </AppBar>
  )
}
