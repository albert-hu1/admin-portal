import React, { useState } from 'react'
import {
  Typography,
  Paper,
  Box,
  Grid,
  Avatar,
  TextField,
  IconButton,
  Stack,
  Divider,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, from: 'founder', text: 'Hello, this is a test message.' },
    { id: 2, from: 'agent', text: 'Thanks, got it!' },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = () => {
    if (input.trim() === '') return

    setIsTyping(true)

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, from: 'founder', text: input },
      ])
      setInput('')
      setIsTyping(false)
    }, 500) // Simulate typing delay
  }

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: 'auto' }}>
      <Paper sx={{ p: 4, height: '80vh', display: 'flex', flexDirection: 'column' }}>
        <Grid item xs={8} sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
          <Box sx={{ mb: 1, textAlign: 'center' }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Capieron Agent
            </Typography>
          </Box>
          <Divider />

          {/* Messages area */}
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              p: 1,
              pt: 4,
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

            {isTyping && (
              <Typography sx={{ fontStyle: 'italic', color: 'gray', textAlign: 'center' }}>
                Typing...
              </Typography>
            )}
          </Box>

          <Divider />

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
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend()
              }}
            />
            <IconButton color="primary" onClick={handleSend}>
              <SendIcon />
            </IconButton>
          </Box>
        </Grid>
      </Paper>
    </Box>
  )
}
