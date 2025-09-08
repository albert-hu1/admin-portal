import { useNavigate, useParams } from "react-router-dom";
import { startups } from "../data/founders";
import PitchCarousel from "../components/PitchCarousel";
import { Badge, Box, Button, Card, IconButton } from "@mui/material";
import { Home, Notifications } from "@mui/icons-material";

export default function Pitch() {
    const { id } = useParams();
    const startup = startups.find((s) => s.id === parseInt(id));
    const navigate = useNavigate();
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
            <IconButton
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
            </IconButton>
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
                <PitchCarousel pitches={startup.pitches} />

                {/* Floating Agent Button */}
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        position: "fixed",
                        bottom: 24,
                        right: 24,
                        borderRadius: "50%",
                        width: 60,
                        height: 60,
                        minWidth: 0,
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        zIndex: 1000,
                    }}
                >
                    Agent
                </Button>
            </Card>
        </Box>

    );
}
