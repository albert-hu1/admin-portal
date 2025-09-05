import { useState } from "react";
import {
    Box,
    Grid,
    Paper,
    Typography,
    Button,
    Tabs,
    Tab,
    Divider,
    List,
    IconButton,
    CardContent,
    Card,
    ListItemButton,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ChatIcon from "@mui/icons-material/Chat"

export default function StartupProfile() {
    const [tab, setTab] = useState(0);
    const params = useParams();
    const navigate = useNavigate();
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    return (
        <Box sx={{ p: 3 }}>
            {/* Startup Name + Chat */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h5" > <u>Startup Name {params.id ?? ''}</u></Typography>
                <Box textAlign="center" sx={{ position: "relative", display: "inline-block" }}>
                    <IconButton
                        onClick={() => navigate(`/chat/${params.id}`)}
                        sx={{
                            width: 80,
                            height: 80,
                            borderRadius: "50%",
                            backgroundColor: "primary.main",
                            color: "white",
                            "&:hover": {
                                backgroundColor: "primary.dark",
                            },
                            position: "relative",
                        }}
                    >
                        <ChatIcon sx={{ fontSize: 40, opacity: 0.3 }} />
                        <Typography
                            variant="subtitle1"
                            sx={{
                                position: "absolute",
                                zIndex: 1,
                                color: "white",
                                fontWeight: "bold",
                            }}
                        >
                            Chat
                        </Typography>
                    </IconButton>
                </Box>

            </Box>

            {/* Founders */}
            <Grid spacing={2}>
                {[1, 2].map((f, id) => (
                    <Grid item xs={12} md={6} key={f}>
                        <Paper sx={{ p: 2, mb: 4, width: '50%' }}>
                            <Typography variant="subtitle1">Founder {id + 1}</Typography>

                            <Typography variant="body2" sx={{ mt: 1 }}>
                                <strong>Name:</strong> Manoj Gupta
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                <strong>Phone:</strong> +91 9876 543 210
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                <strong>Email:</strong> Manoj@example.com
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                <strong>Verification:</strong> True
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            <Divider />
            {/* Legal & Comp */}
            <Box mt={4} mb={4}>
                <Typography variant="h5"><u>Legal & Comp</u></Typography>
                <Tabs value={tab} onChange={(e, v) => setTab(v)} sx={{ mb: 2 }}>
                    <Tab label="Company" />
                    <Tab label="Legal" />
                </Tabs>

                <Paper sx={{ p: 2, width: '50%' }}>
                    {tab === 0 && (
                        <Paper sx={{ p: 2, mb: 2 }}>
                            <Typography variant="h6" gutterBottom>
                                Company Info
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 1 }}>
                                <strong>Company Name:</strong> StartUp Inc.
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 1 }}>
                                <strong>Address:</strong> 123 Startup Lane, Silicon Valley, CA
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 1 }}>
                                <strong>Verification:</strong> True
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 1 }}>
                                <strong>Support Email:</strong> support@example.com
                            </Typography>

                            <Typography variant="body2" sx={{ mt: 2 }}>
                                <strong>COI:</strong>{" "}
                                <Button variant="outlined" size="small">
                                    View Doc
                                </Button>
                            </Typography>
                        </Paper>

                    )}
                    {tab === 1 && (
                        <Box>
                            <Typography gutterBottom >Funding Round:</Typography>
                            <Typography gutterBottom >Funding Type:</Typography>
                            {/* Main Grid */}
                            <Grid spacing={2} display={"flex"} justifyContent={"space-around"} >
                                {/*  Leagasl Docs */}
                                <Grid item xs={12} md={4} width={"50%"}>
                                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                                        Leagasl Docs
                                    </Typography>
                                    <Card>
                                        <CardContent>
                                            <List>
                                                <ListItemButton>Docs - 1</ListItemButton>
                                                <ListItemButton>Docs - 2</ListItemButton>
                                                <ListItemButton>Docs - 3</ListItemButton>
                                            </List>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                {/* team sheet */}
                                <Grid item xs={12} md={4} width={"50%"}>
                                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                                        Team sheet
                                    </Typography>
                                    <Card>
                                        <CardContent>
                                            <List>
                                                <ListItemButton>Docs - 1</ListItemButton>
                                                <ListItemButton>Docs - 2</ListItemButton>
                                                <ListItemButton>Docs - 3</ListItemButton>
                                            </List>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    )}
                </Paper>
            </Box>
            <Divider />
            {/* Validation & Score */}
            <Box sx={{ p: 3 }}>
                {/* Header */}
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" gutterBottom>
                        <u>Validation</u>
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        SCORE: <span style={{ fontWeight: "bold" }}>0 - 100 / In-Progress</span>
                    </Typography>
                </Box>

                {/* Main Grid */}
                <Grid container spacing={3}>
                    {/* Report Section */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{ mb: 1 }}>
                            Report
                        </Typography>
                        <Card>
                            <CardContent>
                                <List>
                                    <ListItemButton>Report - 1</ListItemButton>
                                    <ListItemButton>Report - 2</ListItemButton>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* DDE Section */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{ mb: 1 }}>
                            DDE
                        </Typography>
                        <Card>
                            <CardContent>
                                {/* Tabs for Tech | Business */}
                                <Tabs
                                    value={tabValue}
                                    onChange={handleTabChange}
                                    variant="fullWidth"
                                    sx={{ mb: 2 }}
                                >
                                    <Tab label="Tech" />
                                    <Tab label="Business" />
                                </Tabs>
                                <List>
                                    <ListItemButton>Answer - 1</ListItemButton>
                                    <ListItemButton>Answer - 2</ListItemButton>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Access Section */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{ mb: 1 }}>
                            Access
                        </Typography>
                        <Card>
                            <CardContent>
                                <List>
                                    <ListItemButton>Access - 1</ListItemButton>
                                    <ListItemButton>Access - 2</ListItemButton>
                                    <ListItemButton>Access - 3</ListItemButton>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
            {/* Status */}
            <Divider />
            <Box sx={{ p: 3 }}>
                {/* Status */}
                <Typography variant="h5" gutterBottom>
                    <u>Status: <span style={{ fontWeight: "bold" }}>True / False</span></u>
                </Typography>


                {/* Resources */}
                <Typography variant="h5" gutterBottom>
                    Resources
                </Typography>

                {/* Pitch Decks */}
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Pitch Decks
                </Typography>
                <Card sx={{ mb: 2 }}>
                    <CardContent>
                        <List>
                            <ListItemButton>Recent Deck</ListItemButton>
                            <ListItemButton>Prev</ListItemButton>
                            <ListItemButton>Prev</ListItemButton>
                        </List>
                    </CardContent>
                </Card>

                {/* Pitch Videos */}
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Pitch Videos
                </Typography>
                <Card sx={{ mb: 2 }}>
                    <CardContent>
                        <List>
                            <ListItemButton>Pitch - 1</ListItemButton>
                            <ListItemButton>Pitch - 2</ListItemButton>
                            <ListItemButton>Pitch - 3</ListItemButton>
                        </List>
                    </CardContent>
                </Card>

                {/* Documents */}
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Documents
                </Typography>
                <Card>
                    <CardContent>
                        <List>
                            <ListItemButton>Doc - 1</ListItemButton>
                            <ListItemButton>Doc - 2</ListItemButton>
                            <ListItemButton>Doc - 3</ListItemButton>
                        </List>
                    </CardContent>
                </Card>
            </Box>
            <Divider />
            <Box mt={4} >
                <Button variant="contained" color="success" sx={{ mt: 1, width: '100%' }}>
                    Make the Atartup Active : <span style={{ fontWeight: "bold" }}>True / False</span>
                </Button>
            </Box>
        </Box>
    );
}
