import React from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    Divider,
    Paper,
} from "@mui/material";
import { Business, Category, TrendingUp } from "@mui/icons-material";

export default function Pitch2({ goToNextSlide, onViewTermSheet }) {
    const pitch = {
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        users: "1,500+",
        preOrders: "200+",
        sales: "$774,000",
        description:
            "In a small garage in California, I watched as my friend Woz wired together what would become our first computer. We weren’t just building circuits—we were building a vision for the future. At the time, computers were intimidating, expensive, and out of reach for most people.",
    };
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "3fr 2fr" }, // 60% video / 40% metrics
                gap: 3,
                maxWidth: 1200,
                mx: "auto",
                p: 3,
            }}
        >
            {/* Left: Video */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <video
                    src={pitch.video}
                    controls
                    style={{
                        width: "100%",
                        borderRadius: "16px",
                        objectFit: "cover",
                    }}
                />
            </Box>

            {/* Right: Metrics */}
            <Card
                sx={{
                    borderRadius: "16px",
                    boxShadow: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box sx={{ position: "relative", width: "100%", cursor: "pointer" }} onClick={goToNextSlide}>
                        <video
                            src={pitch.video}
                            controls={false}
                            style={{
                                width: "100%",
                                borderRadius: "16px",
                                objectFit: "cover",
                                pointerEvents: "none",
                            }}
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                fontSize: 48,
                                color: "rgba(255, 255, 255, 0.8)",
                            }}
                        >
                            ▶
                        </Box>
                    </Box>

                    <Typography variant="h6" fontWeight="bold">
                        Metrics
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Business />
                        <Box>
                            <Typography fontWeight="bold">Users</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {pitch.users}
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Category />
                        <Box>
                            <Typography fontWeight="bold">Pre-Orders</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {pitch.preOrders}
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <TrendingUp />
                        <Box>
                            <Typography fontWeight="bold">Sales</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {pitch.sales}
                            </Typography>
                        </Box>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    {/* Action Buttons */}
                    <Button
                        variant="outlined"
                        fullWidth
                        sx={{ borderRadius: "24px", py: 1 }}
                        onClick={onViewTermSheet}
                    >
                        View Term Sheet
                    </Button>
                    <Button
                        variant="outlined"
                        fullWidth
                        sx={{ borderRadius: "24px", py: 1 }}
                    >
                        View Pitch Deck
                    </Button>
                </CardContent>
            </Card>

            {/* Bottom full width */}
            <Paper sx={{ gridColumn: "1 / -1", textAlign: "center", mt: 3 }}>
                <Typography
                    variant="body1"
                    sx={{ maxWidth: 900, mx: "auto", mb: 2 }}
                >
                    {pitch.description}
                </Typography>
            </Paper>
        </Box>
    );
}
