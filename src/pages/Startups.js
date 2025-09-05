import { useMemo, useState } from 'react'
import {
    Box,
    Grid,
    Paper,
    Typography,
    Stack,
    TextField,
    IconButton,
    Chip,
    InputAdornment,
    Dialog,
    DialogContent,
    Button,
    Avatar
} from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat'
import SearchIcon from '@mui/icons-material/Search'
import { founders as seed } from '../data/founders'

// --- Column component ---
function Column({ title, items, onOpen }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pb: 8,
            }}
        >
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                <Chip
                    label={title}
                    color={title === 'Active' ? 'secondary' : 'primary'}
                    variant="outlined"
                />
                <Typography variant="body2" sx={{ opacity: 0.6 }}>
                    {items.length}
                </Typography>
            </Stack>
            <Paper sx={{ p: 2 }}>
                <Stack spacing={1.2}>
                    {items.map((f) => (
                        <Stack key={f.id} direction="row" spacing={1} alignItems="center">
                            <TextField
                                size="small"
                                value={f.name}
                                fullWidth
                                inputProps={{ readOnly: true }}
                            />
                            <IconButton color="secondary" onClick={() => onOpen(f)}>
                                <ChatIcon />
                            </IconButton>
                        </Stack>
                    ))}
                </Stack>
            </Paper>
        </Box>
    )
}

// --- Popup UI ---
function FounderDialog({ open, onClose, founder }) {
    if (!founder) return null

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
            <DialogContent>
                <Box sx={{ p: 2 }}>
                    {/* Header */}
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Typography variant="h6">{founder.startup || 'Startup Name'}</Typography>
                        <Avatar
                            src={founder.logo || "/default-logo.png"}
                            alt={founder.startup}
                            sx={{ width: 60, height: 60 }}
                        />
                    </Box>

                    {/* Founders list */}
                    <Paper sx={{ p: 2, mb: 3 }}>
                        <Typography variant="subtitle1" gutterBottom>
                            Founders
                        </Typography>
                        <Stack spacing={1}>
                            {(founder.founders || [founder.name]).map((name, idx) => (
                                <TextField key={idx} size="small" value={name} fullWidth inputProps={{ readOnly: true }} />
                            ))}
                        </Stack>
                    </Paper>

                    {/* Legals & Camp */}
                    <Paper sx={{ p: 2, mb: 3 }}>
                        <Typography variant="subtitle1" gutterBottom>
                            Legals & Camp
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField size="small" label="Round Type" fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField size="small" label="Round Name" fullWidth />
                            </Grid>
                        </Grid>
                        <TextField
                            size="small"
                            label="Documents"
                            fullWidth
                            multiline
                            rows={3}
                            sx={{ mt: 2 }}
                        />
                    </Paper>

                    {/* Validation + Score */}
                    <Grid container spacing={2} mb={3}>
                        <Grid item xs={6}>
                            <Paper sx={{ p: 2 }}>
                                <Typography variant="subtitle1">Validation</Typography>
                                <Button size="small" variant="outlined" sx={{ mt: 1 }}>
                                    Manually Validate
                                </Button>
                                <Button size="small" variant="contained" sx={{ mt: 1 }}>
                                    Verify: AI
                                </Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper sx={{ p: 2 }}>
                                <Typography variant="subtitle1">Score</Typography>
                                <Typography variant="h6" color="secondary" sx={{ mt: 2 }}>
                                    Report
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>

                    {/* Pitch & Logs */}
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Paper sx={{ p: 4, textAlign: 'center' }}>Pitch</Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper sx={{ p: 4, textAlign: 'center' }}>Logs</Paper>
                        </Grid>
                    </Grid>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

// --- Startups Page ---
export default function Startups() {
    const [q, setQ] = useState('')
    const [selected, setSelected] = useState(null)
    const [open, setOpen] = useState(false)

    const { active, onboard } = useMemo(() => {
        const filtered = seed.filter((f) =>
            f.name.toLowerCase().includes(q.toLowerCase())
        )
        return {
            active: filtered.filter((f) => f.status === 'active'),
            onboard: filtered.filter((f) => f.status === 'onboard'),
        }
    }, [q])

    const handleOpen = (founder) => {
        setSelected(founder)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setSelected(null)
    }

    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 2,
                }}
            >
                <TextField
                    size="small"
                    placeholder="Search"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    sx={{ width: { xs: '100%', sm: 380 }, mb: 8 }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
            <Grid
                container
                spacing={2}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    mt: 2,
                    mx: 8,
                    px: 8,
                }}
            >
                <Grid item xs={12} md={5} display="flex" justifyContent="center">
                    <Column title="Active" items={active} onOpen={handleOpen} />
                </Grid>
                <Grid item xs={12} md={5} display="flex" justifyContent="center">
                    <Column title="On board" items={onboard} onOpen={handleOpen} />
                </Grid>
            </Grid>

            {/* Founder Popup */}
            <FounderDialog open={open} onClose={handleClose} founder={selected} />
        </Box>
    )
}
