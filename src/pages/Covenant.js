import { Notifications } from '@mui/icons-material'
import { Box, IconButton, Badge, Card } from '@mui/material'
import KYCVerificationForm from '../components/Verification/KYCVerificationForm'
import FundVerificationForm from '../components/Verification/FundVerificationForm'
import ProfilePage from '../components/Verification/ProfilePage'
import { useState } from 'react'
export default function Covenant() {
    const [screen, setScreen] = useState(0);
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
            <Card sx={{ width: "100%", maxWidth: 1200, pb: 4 }}>
                {screen === 0 ? <KYCVerificationForm nextScreen={(e) => setScreen(e)} /> : screen === 1 ? <FundVerificationForm nextScreen={(e) => setScreen(e)} /> : <ProfilePage nextScreen={(e) => setScreen(e)} />}



            </Card>
        </Box>
    )
}
