import { Avatar, Box, Paper, styled, Typography, Button } from "@mui/material";
import React from "react";
import noAvatar from "../../images/avatar.png";

const ProBox = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    justifyContent: "center",
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.gray,
  padding: "0.8rem",
  borderRadius: "15px",
  marginTop: "3rem",
  width: "13rem",
}));

const Sidebar = () => {
  return (
    <ProBox flex={1}>
      <Box position="fixed">
        <StyledPaper elevation={8}>
          <Avatar
            alt="Remy Sharp"
            src={noAvatar}
            sx={{ width: 56, height: 56, mx: " auto", mb: 1, mt: 1 }}
          />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginBottom={2}
          >
            <Typography variant="h6" textAlign="center">
              John doe
            </Typography>
            <Typography variant="overline" gutterBottom>
              UI/UX Designer
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              width="90%"
              mb={1}
            >
              <Typography variant="body2">Connections</Typography>
              <Typography>50</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              width="90%"
              mb={1}
            >
              <Typography variant="body2">Posts</Typography>
              <Typography>6</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              width="90%"
              mb={1}
            >
              <Typography variant="body2">Jobs</Typography>
              <Typography>10</Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                "&:hover": { color: "white" },
              }}
            >
              View Profile
            </Button>
          </Box>
        </StyledPaper>
      </Box>
    </ProBox>
  );
};

export default Sidebar;
