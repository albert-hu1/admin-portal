import React, { useState } from "react";
import {
    Box,
    Container,
    Divider,
    Paper,
    Stack,
    TextField,
    Typography,
    IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function ProfilePage() {
    const [messages, setMessages] = useState([
        "Hi, this is your personal assistant agent. Agent – Carter",
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const handleSend = () => {
        if (input.trim() === "") return;

        setIsTyping(true);

        setTimeout(() => {
            setMessages((prev) => [...prev, input]);
            setInput("");
            setIsTyping(false);
        }, 500); // Simulate typing delay
    };

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Profile
                </Typography>

                <Box sx={{ display: "flex", gap: 4 }}>
                    {/* Investment Profile Section */}
                    <Box flex={1}>
                        <Typography variant="h6" gutterBottom>
                            Investment Profile
                        </Typography>
                        <Stack spacing={1}>
                            {[
                                "Investor accreditation status :",
                                "Net worth bracket :",
                                "Annual income range :",
                                "Past investing experience :",
                                "Preferred investment size per deal :",
                                "Target ownership % range:",
                                "Risk tolerance :",
                                "Preferred funding stages :",
                                "Preferred industries/sectors :",
                                "Investment motivation :",
                            ].map((item, idx) => (
                                <Typography key={idx}>- {item}</Typography>
                            ))}
                        </Stack>
                    </Box>

                    {/* Vertical Divider */}
                    <Divider orientation="vertical" flexItem />

                    {/* Fund Verification & Chat Section */}
                    <Box flex={1}>
                        <Paper variant="outlined" sx={{ p: 2, minHeight: 100, mb: 2 }}>
                            <Typography>
                                Fund Verification Status: <br />
                                Report:
                            </Typography>
                        </Paper>

                        <Paper
                            variant="outlined"
                            sx={{ p: 2, minHeight: 300, display: "flex", flexDirection: "column" }}
                        >
                            <Box sx={{ flexGrow: 1, overflowY: "auto", mb: 2 }}>
                                {messages.map((msg, idx) => (
                                    <Typography key={idx} sx={{ mb: 1 }}>
                                        {msg}
                                    </Typography>
                                ))}

                                {isTyping && (
                                    <Typography sx={{ fontStyle: "italic", color: "gray" }}>
                                        Typing...
                                    </Typography>
                                )}
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <TextField
                                    variant="outlined"
                                    placeholder="Type your message..."
                                    fullWidth
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") handleSend();
                                    }}
                                />
                                <IconButton color="primary" onClick={handleSend}>
                                    <SendIcon />
                                </IconButton>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}
