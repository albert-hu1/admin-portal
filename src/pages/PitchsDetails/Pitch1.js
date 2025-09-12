import { Box, Button, Card, Chip, Divider, Paper, Typography } from '@mui/material'
import { Business, Category, TrendingUp } from "@mui/icons-material";

export const Pitch1 = () => {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 2,
                maxWidth: "1000px",
                mx: "auto",
                p: 1,
            }}
        >
            {/* Left: Video */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <video
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    controls
                    style={{
                        width: "100%",
                        borderRadius: "16px",
                        objectFit: "cover",
                    }}
                />
            </Box>

            {/* Right: Pitch Details */}
            <Card
                sx={{
                    p: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    borderRadius: "16px",
                    boxShadow: 3,
                    textAlign: "center",
                }}
            >
                {/* Logo */}
                <Box>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                        alt="Logo"
                        style={{ height: 40, display: "block", margin: "0 auto" }}
                    />
                </Box>

                {/* Name */}
                <Typography variant="h5" fontWeight="bold">
                    APPLE
                </Typography>

                {/* Address */}
                <Typography variant="body2" color="text.secondary">
                    San Francisco, California, United States
                </Typography>

                {/* Deal */}
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    US$ 300,000 For 5% Equity
                </Typography>

                {/* Tags */}
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "center" }}>
                    <Chip label="Seed" />
                    <Chip label="Hard-Tech" />
                    <Chip label="3 Founders" />
                </Box>

                {/* Description */}
                <Typography variant="body2" color="text.secondary">
                    A revolutionary personal computer company making technology simple, beautiful, and accessible to everyone.
                </Typography>

                <Divider sx={{ width: "100%" }} />

                {/* Metrics */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "center" }}>
                        <Business fontSize="small" />
                        <Typography><b>Users:</b> 1,500+</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "center" }}>
                        <Category fontSize="small" />
                        <Typography><b>Pre-Orders:</b> 200+</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "center" }}>
                        <TrendingUp fontSize="small" />
                        <Typography><b>Sales:</b> $774,000</Typography>
                    </Box>
                </Box>

                {/* Buttons */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2, width: "100%" }}>
                    <Button variant="outlined" fullWidth>
                        View Term Sheet
                    </Button>
                    <Button variant="outlined" fullWidth>
                        View Pitch Deck
                    </Button>
                </Box>
            </Card>

            {/* Bottom Full-Width Pitch Note + CTA */}
            <Box
                sx={{
                    gridColumn: "1 / -1",
                    textAlign: "center",
                    mt: 4,
                }}
            >
                <Paper sx={{ p: 2, mb: 3 }}>
                    <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto", mb: 2 }}>
                        In a small garage in California, I watched as my friend Woz wired together what would become our first computer. We weren’t just building circuits—we were building a vision for the future. At the time, computers were intimidating, expensive, and out of reach for most people.
                    </Typography>
                </Paper>
                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        borderRadius: "24px",
                        px: 4,
                        py: 1.5,
                    }}
                >
                    Start a Deal
                </Button>
            </Box>
        </Box>
    )
}
