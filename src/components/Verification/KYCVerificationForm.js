import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Stack,
} from "@mui/material";

export default function KYCVerificationForm({ nextScreen }) {
  const [idDocument, setIdDocument] = useState(null);
  const [selfie, setSelfie] = useState(null);
  const [secondaryDoc, setSecondaryDoc] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting KYC Form", { idDocument, selfie, secondaryDoc });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Identity Verification (KYC)
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Stack spacing={3}>
            <Typography>
              - Government-issued ID (passport, driver's license, or national
              ID)
            </Typography>
            <Button variant="contained" component="label">
              Upload ID Document
              <input
                type="file"
                hidden
                accept="image/*,application/pdf"
                onChange={(e) => setIdDocument(e.target.files[0])}
              />
            </Button>
            {idDocument && (
              <Typography variant="body2">
                Selected: {idDocument.name}
              </Typography>
            )}

            <Typography>
              - Selfie for facial match (biometric scan)
            </Typography>
            <Button variant="contained" component="label">
              Upload Selfie
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => setSelfie(e.target.files[0])}
              />
            </Button>
            {selfie && (
              <Typography variant="body2">Selected: {selfie.name}</Typography>
            )}

            <Typography>
              - Optional secondary document (bank statement or utility bill)
            </Typography>
            <Button variant="contained" component="label">
              Upload Secondary Document
              <input
                type="file"
                hidden
                accept="image/*,application/pdf"
                onChange={(e) => setSecondaryDoc(e.target.files[0])}
              />
            </Button>
            {secondaryDoc && (
              <Typography variant="body2">
                Selected: {secondaryDoc.name}
              </Typography>
            )}

            <Button type="submit" variant="contained" color="primary" onClick={() => nextScreen(1)} >
              Submit
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
}
