"use client";
import { Grid } from "@mui/material";
import DashSidebar from "@/components/Dashboard/DashSidebar";
import DashStatsBar from "@/components/Dashboard/DashStatsBar";
import DashStatsTable from "@/components/Dashboard/DashStatsTable";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { records } from "@/utils/dummydatas";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";

export default function Dashboard() {
  const { USER_INFO, SET_USER_INFO, SET_ACCESS_TOKEN, isLoading } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token && !USER_INFO) {
      fetch("http://77.237.82.221:8000/accounts/profile/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.status === 401) {
            throw new Error("Unauthorized");
          }
          return response.json();
        })
        .then((data) => {
          SET_USER_INFO(data);
          SET_ACCESS_TOKEN(token);
        })
        .catch((error) => {
          localStorage.removeItem("ACCESS_TOKEN");
          SET_ACCESS_TOKEN(null);
          SET_USER_INFO(null);
        });
    }
  }, [USER_INFO, SET_USER_INFO, SET_ACCESS_TOKEN]);

  if (isLoading) {
    return <p>Loading...</p>; // Show loading indicator while checking auth state
  }

  return (
    <ProtectedRoute>
      <Grid container>
        <DashSidebar />
        <Grid item xs={12} sm={9} lg={10} p={3}>
          <DashStatsBar />
          <DashStatsTable data={records} />
        </Grid>
      </Grid>
    </ProtectedRoute>
  );
}
