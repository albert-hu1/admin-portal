import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    InputBase,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Button,
    Box,
    Badge,
    Divider,
    Tabs,
    Tab,
} from "@mui/material";
import { Business, Category, Person, TrendingUp } from "@mui/icons-material";
import { Search, Notifications, FilterList } from "@mui/icons-material";
import { startups } from "../data/founders";
import { useNavigate } from "react-router-dom";



export default function FlowDeck() {
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    const navigate = useNavigate();
    return (
        <Box>
            {/* Header */}
            <AppBar position="static" sx={{ boxShadow: "none", bgcolor: "#fff", color: "#000" ,pt:2}}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    {/* Centered Search Bar */}
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        flexGrow: 1,
                        flexDirection: "column",
                    }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                border: "1px solid #ccc",
                                borderRadius: 2,
                                px: 1,
                                flexGrow: 1,
                                maxWidth: 400,
                                mx: "auto",
                            }}
                        >
                            <Search />
                            <InputBase placeholder="Search…" sx={{ ml: 1, flexGrow: 1 }} />
                        </Box>
                        <Box sx={{ display: "flex", pt: 1 }}>
                            <Tabs
                                value={tabValue}
                                onChange={handleTabChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                            >
                                <Tab label="Zenith" />
                                <Tab label="Focus" />

                            </Tabs>
                            <IconButton>
                                <FilterList />
                            </IconButton>
                        </Box>
                    </Box>


                    {/* Notifications aligned to the right */}
                    <Badge badgeContent={3} color="secondary" sx={{ ml: 2 }}>
                        <IconButton>
                            <Notifications />
                        </IconButton>
                    </Badge>
                </Toolbar>
            </AppBar>
            <Divider />

            {/* Startup Cards */}
            <Grid container spacing={2} sx={{ p: 2 }}>
                {startups.map((startup) => (
                    <Grid item xs={12} key={startup.id}>
                        <Card sx={{ display: "flex", p: 2, width: '92%' }}>
                            <CardMedia
                                component="img"
                                sx={{
                                    width: 160,
                                    height: "auto",
                                    borderRadius: 1,
                                    objectFit: 'cover'
                                }}
                                image={startup.image}
                                alt={startup.name}
                            />
                            <CardContent >

                                {/* Name + Logo in one row, centered */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        position: "relative",
                                    }}
                                ><Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
                                                src={startup.logoUrl}
                                                alt="Logo"
                                                style={{
                                                    maxWidth: '100%',
                                                    maxHeight: '100%',
                                                    objectFit: 'contain',
                                                    padding: 4,
                                                }}
                                            />
                                        </Box>

                                        <Typography variant="h5" textAlign="center">
                                            {/* Logo on the right side */}
                                            {startup.name}
                                        </Typography>
                                    </Box>


                                </Box>

                                {/* Location and Deal underneath */}
                                <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mt: 1 }}>
                                    {startup.location}
                                </Typography>

                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontWeight: "bold", mt: 1, textAlign: "center" }}
                                >
                                    {startup.deal}
                                </Typography>

                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    {startup.description}
                                    {startup.description}
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1, px: 4, justifyContent: "center", cursor: "pointer" }} onClick={() => navigate(`/pitch/${startup.id}`)}
                            >

                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <Business fontSize="small" />
                                    <Typography variant="body1">Stage:<Typography variant="body2" color="text.secondary">
                                        {startup.stage}
                                    </Typography></Typography>

                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <Category fontSize="small" />
                                    <Typography variant="body1">Type:<Typography variant="body2" color="text.secondary">
                                        {startup.type}
                                    </Typography></Typography>

                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <Person fontSize="small" />
                                    <Typography variant="body1">Founders:<Typography variant="body2" color="text.secondary">
                                        {startup.founders}
                                    </Typography></Typography>

                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <TrendingUp fontSize="small" />
                                    <Typography variant="body1">Traction:<Typography variant="body2" color="text.secondary">
                                        {startup.traction}
                                    </Typography></Typography>

                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {/* Absolute Positioned Agent Button */}
            <Button
                variant="contained"
                color="primary"
                sx={{
                    position: 'fixed',
                    bottom: 24,
                    right: 24,
                    borderRadius: '50%',
                    width: 60,
                    height: 60,
                    minWidth: 0,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    zIndex: 1000,
                }}
            >
                Agent
                c
            </Button>
        </Box>
    );
}