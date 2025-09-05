import { useMemo, useState } from 'react'
import {
    Box,
    Paper,
    Typography,
    TextField,
    InputAdornment,
    Button,
    Stack,
    Avatar,
} from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat'
import SearchIcon from '@mui/icons-material/Search'
import { founders as seed } from '../data/founders'
import { useNavigate } from 'react-router-dom'

// --- Startup Row Component ---
function StartupRow({ founder }) {
    const navigate = useNavigate()
    return (
        <Box
            sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingRight: 30,
            }}
        >
            <Paper sx={{
                p: 1,
                display: 'flex',
                width: '90%',
            }}>
                <Avatar
                    src={founder.logo || "/default-logo.png"}
                    alt={founder.startup}
                    sx={{ width: 40, height: 40 }}
                /> <Typography onClick={() => navigate(`/start-up-profile/${founder.id}`)} sx={{ mx: 4, cursor: 'pointer' }}><u>{founder.name}</u></Typography>
            </Paper>
            <Button
                variant="contained"
                color="secondary"
                startIcon={<ChatIcon />}
                onClick={() => navigate(`/chat/${founder.id}`)}
                sx={{ mx: 3 }}
            >
                Chat
            </Button>
        </Box>
    )
}

// --- Main Component ---
export default function Startups() {
    const [q, setQ] = useState('')
    const [tab, setTab] = useState('active') // active | onboard

    const { active, onboard } = useMemo(() => {
        const filtered = seed.filter((f) =>
            f.name.toLowerCase().includes(q.toLowerCase())
        )
        return {
            active: filtered.filter((f) => f.status === 'active'),
            onboard: filtered.filter((f) => f.status === 'onboard'),
        }
    }, [q])


    return (
        <Box sx={{ p: 4 }}>
            {/* Search */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 2,
                    mb: 4,
                }}
            >
                <TextField
                    size="small"
                    placeholder="Search startups..."
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    sx={{ width: { xs: '100%', sm: 400 } }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            {/* Tabs Active / Onboard */}
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <Button
                    variant={tab === 'active' ? 'contained' : 'outlined'}
                    onClick={() => setTab('active')}
                >
                    Active
                </Button>
                <Button
                    variant={tab === 'onboard' ? 'contained' : 'outlined'}
                    onClick={() => setTab('onboard')}
                >
                    Onboard
                </Button>
            </Stack>

            {/* Startup List */}
            <Paper
                sx={{
                    p: 2,
                }}
            >
                <Stack spacing={2}>
                    {(tab === 'active' ? active : onboard).map((f) => (
                        <StartupRow key={f.id} founder={f} />
                    ))}
                </Stack>
            </Paper>
        </Box>
    )
}
