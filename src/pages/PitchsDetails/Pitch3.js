import {
    Box,
    Typography,
    Button,
    Paper,
} from "@mui/material";

export default function Pitch3({ onViewTermSheet }) {
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


            {/* Bottom full width */}
            <Paper sx={{ gridColumn: "1 / -1", textAlign: "center", mt: 3 }}>
                <Typography
                    variant="body1"
                    sx={{ maxWidth: 900, mx: "auto", mb: 2 }}
                >
                    {pitch.description}
                </Typography>
            </Paper>
            <Box justifyContent="center" sx={{ display: "flex", flexDirection: "row", gap: 3, width: "100%", gridColumn: "1 / -1", }}>
                <Button
                    variant="outlined"
                    sx={{ borderRadius: "24px", py: 1 }}
                    onClick={onViewTermSheet}
                >
                    View Term Sheet
                </Button>
                <Button
                    variant="outlined"
                    sx={{ borderRadius: "24px", py: 1 }}
                >
                    Start a Deal
                </Button>
                <Button
                    variant="outlined"
                    sx={{ borderRadius: "24px", py: 1 }}
                >
                    View Pitch Deck
                </Button>
            </Box>
        </Box>
    );
}
