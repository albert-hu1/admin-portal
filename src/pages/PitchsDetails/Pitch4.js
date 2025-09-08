// Pitch4.js
import { Box, Typography, Paper, Button, Divider, Stack } from "@mui/material";

export default function Pitch4({ onBack }) {
    return (
        <Box sx={{ maxWidth: 1200, mx: "auto", p: 4 }}>
            {/* Header */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mb: 3,
                }}
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                    alt="Apple Logo"
                    style={{ width: 60, marginBottom: 8 }}
                />
                <Typography variant="h5" fontWeight="bold">
                    Document Agreement 1
                </Typography>
            </Box>
            <Box
                sx={{
                    maxWidth: 1200,
                    mx: "auto",
                    p: 4,
                    display: "flex",
                    flexDirection: "row",
                    gap: 3,
                    alignItems: "stretch", // makes all items same height
                }}
            >
                {/* Left bottom button */}
                <Button
                    variant="contained"
                    sx={{
                        px: 4,
                        py: 1,
                        borderRadius: "8px",
                        fontWeight: "bold",
                        height: "fit-content", // fit button nicely
                        alignSelf: "flex-end", // push button to bottom
                    }}
                >
                    Offer & Ping
                </Button>

                {/* Scrollable Content */}
                <Paper
                    elevation={3}
                    sx={{
                        flex: 1,
                        p: 3,
                        borderRadius: "16px",
                        maxHeight: "600px",
                        overflowY: "auto", // scroll only paper
                    }}
                >
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                        Startup Name
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Seed Round Preferred Stock Financing
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="subtitle1" fontWeight="bold">
                        Summary of Terms
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Company [Startup Name], a [State]-based Corporation. <br />
                        Securities: Series Seed Preferred Stock <br />
                        Amount Raised: $500,000 <br />
                        Pre-Money Valuation: $4,500,000 <br />
                        Price per Share: $1.00 <br />
                        Capitalization: 10,000,000 shares (fully diluted) <br />
                        Closing Date: [Target Date]
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="subtitle1" fontWeight="bold">
                        Key Terms
                    </Typography>

                    <Stack spacing={1} sx={{ pl: 2 }}>
                        <Typography variant="body2">
                            1. <strong>Investors:</strong> [Investor Names]
                        </Typography>
                        <Typography variant="body2">
                            2. <strong>Lead Investor:</strong> [Name, if any]
                        </Typography>
                        <Typography variant="body2">
                            3. <strong>Type of Security:</strong> Series Seed Preferred Stock, standard rights.
                        </Typography>
                        <Typography variant="body2">
                            4. <strong>Use of Proceeds:</strong> Working capital, product development, hiring.
                        </Typography>
                        <Typography variant="body2">
                            5. <strong>Dividends:</strong> Non-cumulative, equal to common stock if not converted.
                        </Typography>
                        <Typography variant="body2">
                            6. <strong>Liquidation Preference:</strong> 1x purchase price + declared but unpaid dividends.
                        </Typography>
                        <Typography variant="body2">
                            7. <strong>Conversion Rights:</strong> Convertible 1:1 into common stock.
                        </Typography>
                        <Typography variant="body2">
                            8. <strong>Anti-Dilution:</strong> Standard weighted average adjustment.
                        </Typography>
                        <Typography variant="body2">
                            9. <strong>Voting Rights:</strong> Vote together with common stock.
                        </Typography>
                        <Typography variant="body2">
                            10. <strong>Board of Directors:</strong> 1 founder, 1 investor, 1 independent (optional).
                        </Typography>
                        <Typography variant="body2">
                            11. <strong>Right of First Refusal:</strong> Investors can purchase pro-rata in future rounds.
                        </Typography>
                        <Typography variant="body2">
                            12. <strong>Founder Vesting:</strong> 4 years with 1-year cliff.
                        </Typography>
                        <Typography variant="body2">
                            13. <strong>Drag-Along Rights:</strong> Majority can force sale under conditions.
                        </Typography>
                        <Typography variant="body2">
                            14. <strong>Information Rights:</strong> Investors receive company updates.
                        </Typography>
                    </Stack>
                </Paper>

                {/* Right bottom button */}
                <Button
                    variant="contained"
                    sx={{
                        px: 4,
                        py: 1,
                        borderRadius: "8px",
                        fontWeight: "bold",
                        height: "fit-content",
                        alignSelf: "flex-end",
                        backgroundColor: "#fff",
                        color: "#8257e6",
                        border: "1px solid #8257e6",
                        "&:hover": {
                            backgroundColor: "#f5f0ff",
                        },
                    }}
                >
                    Accept & Start a Deal
                </Button>
            </Box>
        </Box>
    );
}
