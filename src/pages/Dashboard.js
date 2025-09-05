import { Typography, Paper, Box } from '@mui/material'
export default function Dashboard(){
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5">Dashboard</Typography>
      <Box sx={{ mt: 1, opacity: 0.7 }}>Welcome to Capieron.</Box>
    </Paper>
  )
}
