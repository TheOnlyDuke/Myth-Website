"use client";
import { Grid, Box, CircularProgress, Alert } from "@mui/material";
import DashSidebar from "@/components/Dashboard/DashSidebar";
import DashStatsBar from "@/components/Dashboard/DashStatsBar";
import DashStatsTable from "@/components/Dashboard/DashStatsTable";
import { records } from "@/utils/dummydatas";
import { useAuth } from "@/contexts/AuthContext";
import { apiClient } from "@/utils/api";
import { cookieStorage } from "@/utils/cookies";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { USER_INFO, updateAuth, clearAuth, isLoading } = useAuth();
  const [error, setError] = useState("");

  useEffect(() => {
    if (!USER_INFO) {
      const token = cookieStorage.getToken();
      const userInfo = cookieStorage.getUserInfo();

      if (token) {
        apiClient
          .getProfile(token)
          .then((data) => {
            updateAuth(token, data);
          })
          .catch((error) => {
            setError(error.message);
            clearAuth();
          });
      }
    }
  }, [USER_INFO, updateAuth, clearAuth]);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={3}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      <DashSidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginRight: "240px",
        }}
      >
        <DashStatsBar />
        <DashStatsTable data={records} />
      </Box>
    </Box>
  );
}
