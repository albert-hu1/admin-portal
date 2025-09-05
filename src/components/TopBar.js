import { AppBar, Toolbar, IconButton, Typography, Box, TextField, InputAdornment, Badge } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'

export default function TopBar({ onMenuClick }) {
  return (
    <AppBar position="fixed" color="primary" elevation={0}>
      <Toolbar sx={{ gap: 2 }}>
        <IconButton edge="start" onClick={onMenuClick} sx={{ display: { md: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ display: { xs: 'none', md: 'block' } }}>Super Admin</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <TextField
          size="small"
          placeholder="Search founders, startups…"
          sx={{ width: { xs: '100%', sm: 380 } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Badge badgeContent={3} color="secondary" sx={{ ml: 1 }}>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
        </Badge>
      </Toolbar>
    </AppBar>
  )
}
