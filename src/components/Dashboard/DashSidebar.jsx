"use client";
import {
  Drawer,
  Box,
  Avatar,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashSidebar() {
  const { USER_INFO, clearAuth } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await clearAuth();
    router.push("/auth/login");
  };

  if (!USER_INFO) return null;

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
          backgroundColor: "#f5f5f5",
        },
      }}
    >
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Avatar
          sx={{
            width: 80,
            height: 80,
            bgcolor: "primary.main",
            fontSize: "2rem",
          }}
        >
          {USER_INFO.full_name?.[0]}
        </Avatar>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" fontWeight="bold">
            {USER_INFO.full_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {USER_INFO.phone_number}
          </Typography>
        </Box>

        <Divider sx={{ width: "100%", my: 2 }} />

        <Button variant="contained" fullWidth sx={{ mb: 1 }}>
          آمار من
        </Button>

        <Link
          href="/"
          style={{
            width: "100%",
            textDecoration: "none",
          }}
        >
          <Button variant="outlined" fullWidth sx={{ mb: 1 }}>
            صفحه اصلی
          </Button>
        </Link>

        <Button
          variant="outlined"
          color="error"
          onClick={handleLogout}
          fullWidth
        >
          خروج از حساب
        </Button>
      </Box>
    </Drawer>
  );
}
