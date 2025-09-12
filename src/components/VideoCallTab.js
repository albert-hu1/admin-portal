import React, { useState } from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    Stack,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function VideoCallTab() {
    const [date, setDate] = useState(dayjs());

    const meetings = [
        { id: 1, time: "DD/MM/YY HH:MM", status: "pending" },
        { id: 2, time: "DD/MM/YY HH:MM", status: "pending" },
        { id: 3, time: "DD/MM/YY HH:MM", status: "pending" },
    ];

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 3,
                mt: 3,
            }}
        >
            {/* Left: Date Picker & Schedule */}
            <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Date
                    </Typography>
                    <DatePicker
                        label="Choose Date"
                        value={date}
                        onChange={(newValue) => setDate(newValue)}
                        sx={{ width: "100%", mb: 2 }}
                    />
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{ bgcolor: "#7b5af7", "&:hover": { bgcolor: "#674de3" } }}
                    >
                        Schedule
                    </Button>
                </CardContent>
            </Card>

            {/* Right: Schedule & Requests */}
            <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Schedule & requests
                    </Typography>

                    <Stack spacing={2}>
                        {meetings.map((meeting) => (
                            <Box
                                key={meeting.id}
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",

                                    p: 1.5,
                                    borderRadius: 2,
                                }}
                            >
                                <Typography>
                                    Meeting scheduled for {meeting.time}
                                </Typography>
                                <Stack direction="row" spacing={1}>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="success"
                                        sx={{ textTransform: "none" }}
                                    >
                                        Accept
                                    </Button>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="error"
                                        sx={{ textTransform: "none" }}
                                    >
                                        Change
                                    </Button>
                                </Stack>
                            </Box>
                        ))}
                    </Stack>

                    {/* Instant Meeting Button */}
                    <Box sx={{ textAlign: "center", mt: 3 }}>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: "#00aaff",
                                "&:hover": { bgcolor: "#008ecc" },
                                px: 4,
                                py: 1,
                                borderRadius: "30px",
                                textTransform: "none",
                            }}
                        >
                            Start a meeting
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
