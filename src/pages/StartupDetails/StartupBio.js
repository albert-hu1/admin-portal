import { useParams } from "react-router-dom";
import { startups } from "../../data/founders";
import { AppBar, Avatar, Badge, Box, Button, Card, IconButton, Stack, Tab, Tabs, Typography } from "@mui/material";
import { Notifications } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppleIcon from "@mui/icons-material/Apple";
import { useState } from "react";
import VideoCallTab from "../../components/VideoCallTab";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
function TabPanel(props) {
    const { children, value, index } = props;
    return (
        <div hidden={value !== index}>
            {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
        </div>
    );
}
export default function StartupBio() {
    const { id } = useParams();
    const startup = startups.find((s) => s.id === parseInt(id));
    const [value, setValue] = useState(1); // Default to Meeting Logs

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    if (!startup) return <p>Startup not found</p>;
    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                px: 3,
                pt: 6,
            }}
        >
            {/* Home Button at Top Left */}
            {/* <IconButton
                onClick={() => navigate("/")}
                color="primary"
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 24,
                    zIndex: 1000,
                    border: "1px solid #00d4ff",
                    borderColor: "#00d4ff",
                    
                    color: "#00d4ff",
                }}
            >
                <Home />
            </IconButton> */}
            {/* Notifications aligned top right */}
            <Badge
                badgeContent={3}
                color="secondary"
                sx={{
                    position: "absolute",
                    top: 0,
                    right: 24
                }}
            >
                <IconButton>
                    <Notifications />
                </IconButton>
            </Badge>

            {/* Centered card with side padding */}
            <Card sx={{ width: "100%", maxWidth: 1200 }}>
                <Box sx={{ width: "100%", p: 4 }}>
                    {/* Header */}
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3, p: 2, borderBottom: "1px solid #e0e0e0" }}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar src="/path/to/steve-jobs.jpg" />
                            <Typography variant="h6">Steve Jobs</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <AppleIcon />
                            <Typography variant="h6">
                                <strong>Apple</strong>
                            </Typography>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={1}>
                            <IconButton>
                                <PersonIcon />
                            </IconButton>
                        </Stack>
                    </Stack>
                    {/* Tabs */}
                    <AppBar position="static" color="default" elevation={0}>
                        <Tabs
                            value={value}
                            onChange={handleChange}

                            textColor="inherit"
                            TabIndicatorProps={{ style: { display: "none" } }}
                            sx={{
                                px: 8,
                                "& .MuiTabs-flexContainer": {
                                    justifyContent: "space-between",
                                },
                            }}
                        >
                            <Tab label="Term Sheet" />
                            <Tab label="Meeting Logs" />
                            <Tab label="Legals" />
                            <Tab icon={<VideoCallIcon />} />
                            <Tab icon={<ChatBubbleOutlineIcon />} />
                        </Tabs>

                    </AppBar>

                    {/* Tab Content */}
                    <TabPanel value={value} index={0}>
                        <Typography>Term Sheet content goes here.</Typography>
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                        {/* Meeting Logs */}
                        {[1, 2, 3, 4].map((meeting, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    p: 1.5,
                                    m: 1,
                                    borderRadius: 2,
                                    boxShadow: 1,
                                }}
                            >
                                <Typography>Meeting at DD/MM/YY HH:MM</Typography>
                                <Button variant="contained">View Transcript</Button>
                            </Box>
                        ))}
                        <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic" }}>
                            All meeting transcripts will be stored here automatically.
                        </Typography>
                    </TabPanel>

                    <TabPanel value={value} index={2}>
                        <Typography>Legals content goes here.</Typography>
                    </TabPanel>

                    <TabPanel value={value} index={3}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <VideoCallTab />
                        </LocalizationProvider>
                    </TabPanel>

                    <TabPanel value={value} index={4}>
                        <Typography>Messages feature coming soon.</Typography>
                    </TabPanel>
                </Box>
            </Card>
        </Box>

    );
}
