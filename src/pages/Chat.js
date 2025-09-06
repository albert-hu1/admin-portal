import {
  Typography,
  Paper,
  Box,
  Grid,
  List,
  ListItem,
  Avatar,
  Divider,
  TextField,
  IconButton,
  Stack
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Chat() {
  const history = [
    { id: 1, date: '01/09/25', time: '10:15:22', agent: 'Alice' },
    { id: 2, date: '01/09/25', time: '10:17:45', agent: 'Bob' },
    { id: 3, date: '01/09/25', time: '10:22:10', agent: 'Charlie' },
  ]

  const messages = [
    { id: 1, from: 'founder', text: 'Hello, this is a test message.' },
    { id: 2, from: 'agent', text: 'Thanks, got it!' },
  ]
  const params = useParams();
  return (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ mx: 8 }}>
        Startup {params.id ? `- ${params.id}` : ''} Chat
      </Typography>
      <Paper sx={{ p: 4, height: '80vh', display: 'flex', flexDirection: 'column' }}>

        <Grid spacing={2} sx={{ flex: 1, overflow: 'hidden', display: 'flex', justifyContent: 'space-around' }}>
          {/* Left panel - History */}
          <Grid item xs={4} sx={{ borderRight: 1, borderColor: 'divider', overflowY: 'auto', width: '50%' }}>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold', textAlign: 'center' }}>
              History
            </Typography>
            <List dense sx={{ width: '100%' }}>
              {history.map((h) => (
                <React.Fragment key={h.id}>
                  <ListItem>
                    <Grid display="flex" justifyContent="space-between" width="100%" >
                      {/* Left side: Date above Time */}
                      <Grid item xs={6}>
                        <Typography fontSize={12}>{h.date}</Typography>
                        <Typography fontSize={12}>{h.time}</Typography>
                      </Grid>

                      {/* Right side: Agent */}
                      <Grid item xs={6} textAlign="right">
                        <Typography fontSize={12} >{h.agent}</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Grid>

          {/* Right panel - Messages */}
          <Grid item xs={8} sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
            <Box sx={{ mb: 1, textAlign: 'center' }}>
              <Typography variant="subtitle1" fontWeight="bold">
                Startup Name
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Founder Name
              </Typography>
            </Box>

            {/* Messages area */}
            <Box
              sx={{
                flex: 1,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                p: 1,
              }}
            >
              {messages.map((msg) => (
                <Stack
                  key={msg.id}
                  direction={msg.from === 'founder' ? 'row' : 'row-reverse'}
                  spacing={1}
                  alignItems="flex-end"
                >
                  <Avatar sx={{ width: 28, height: 28 }} />
                  <Paper
                    sx={{
                      p: 1,
                      bgcolor: msg.from === 'founder' ? 'grey.200' : 'primary.light',
                      color: msg.from === 'founder' ? 'black' : 'white',
                      maxWidth: '60%',
                    }}
                  >
                    <Typography variant="body2">{msg.text}</Typography>
                  </Paper>
                </Stack>
              ))}
            </Box>

            {/* Input box */}
            <Box sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
              <IconButton>
                <AddCircleOutlineIcon />
              </IconButton>
              <TextField
                size="small"
                placeholder="Type a message..."
                fullWidth
                sx={{ mx: 1 }}
              />
              <IconButton color="primary">
                <SendIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box >
  )
}
