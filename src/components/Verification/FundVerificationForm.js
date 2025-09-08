import React from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

export default function FundVerificationForm({ nextScreen }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for form submission, e.g., API call
    console.log("Submitting Fund Verification");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Fund Verification
        </Typography>

        <Stack spacing={2} sx={{ mt: 2 }}>
          <Typography>- Secure bank account linking via Plaid</Typography>
          <Typography>
            - Connect bank account to via Stripe Connect
          </Typography>
          <Typography>
            - Minimum $1,000,000 in verified liquid assets required to
            proceed
          </Typography>
          <Typography>
            - Funds must be in checking, savings, or verified brokerage
            account
          </Typography>
        </Stack>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
          <Button type="submit" variant="contained" color="primary" onClick={() => nextScreen(2)}>
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
