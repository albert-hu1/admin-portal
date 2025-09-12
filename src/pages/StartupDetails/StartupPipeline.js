import { useState } from 'react'
import {
    Box,
    Paper,
    Tabs,
    Tab,
    Typography,
    Stack,
    Divider,
    IconButton,
} from '@mui/material'
import { ExitToApp, Rocket } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';

const startups = [
    { id: 1, name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', type: 'Hard Tech' },
    { id: 2, name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png', type: 'Internet' },
    { id: 3, name: 'Facebook', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs7Atw7fYm6bJeXe7Lyr2tYML0s7JuL8k9pA&s', type: 'Internet' },
    { id: 4, name: 'OpenAI', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdM9MEQ0ExL1PmInT3U5I8v63YXBEdoIT0Q&s', type: 'AI' },
]

export default function StartupPipeline() {
    const [tab, setTab] = useState(1);
    const navigate = useNavigate();

    return (
        <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
            <Paper sx={{ p: 3 }}>
                <Tabs
                    value={tab}
                    onChange={(e, newTab) => setTab(newTab)}
                    textColor="primary"
                    indicatorColor="primary"
                >
                    <Tab label="Pipeline" />
                    <Tab label="Pending" />
                    <Tab label="Portfolio" />
                </Tabs>

                <Divider sx={{ my: 2 }} />
                {tab === 0 && (
                    <Box>
                        {startups.map((startup) => (
                            <Stack
                                key={startup.id}
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                sx={{ my: 1, p: 1, cursor: 'pointer' }}
                                component={Paper}
                                onClick={() => navigate(`/start-up/${startup.id}`)}
                            >
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Box
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            bgcolor: 'transparent',
                                            overflow: 'hidden',
                                            borderRadius: '50%',
                                        }}
                                    >
                                        <img
                                            src={startup.logo}
                                            alt="Logo"
                                            style={{
                                                maxWidth: '100%',
                                                maxHeight: '100%',
                                                objectFit: 'contain',
                                                padding: 4,
                                            }}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography fontWeight="bold">{startup.name}</Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            San Francisco, California, United States
                                        </Typography>
                                    </Box>
                                </Stack>
                                <Stack direction="column" spacing={1}>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <Rocket />
                                        <Typography variant="body2" width={80}>{startup.type}</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        ))}
                    </Box>
                )}


                {tab === 1 && (
                    <Box>
                        {startups.map((startup) => (
                            <Stack
                                key={startup.id}
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                sx={{ my: 1, p: 1, cursor: 'pointer' }}
                                component={Paper}
                                onClick={() => navigate(`/start-up/${startup.id}`)}
                            >
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Box
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            bgcolor: 'transparent',
                                            overflow: 'hidden',
                                            borderRadius: '50%',
                                        }}
                                    >
                                        <img
                                            src={startup.logo}
                                            alt="Logo"
                                            style={{
                                                maxWidth: '100%',
                                                maxHeight: '100%',
                                                objectFit: 'contain',
                                                padding: 4,
                                            }}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography fontWeight="bold">{startup.name}</Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            San Francisco, California, United States
                                        </Typography>
                                    </Box>
                                </Stack>
                                <Stack direction="column" spacing={1}>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <Rocket />
                                        <Typography variant="body2" width={80}>{startup.type}</Typography>
                                        <IconButton size="small">
                                            <ExitToApp fontSize="small" />
                                        </IconButton>
                                    </Stack>
                                </Stack>
                            </Stack>
                        ))}
                    </Box>
                )}
                {tab === 2 && (
                    <Typography textAlign="center" color="gray" sx={{ mt: 4 }}>
                        Pipeline view content goes here
                    </Typography>
                )}


            </Paper>
        </Box>
    )
}
