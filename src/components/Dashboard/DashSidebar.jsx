"use client";
import { Drawer, Box, Avatar, Typography, Button } from "@mui/material";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

export default function DashSidebar() {
  const { USER_INFO, SET_USER_INFO } = useAuth();

  function LogOut() {
    localStorage.removeItem("ACCESS_TOKEN");
    SET_USER_INFO(null);
  }

  if (!USER_INFO) {
    return null;
  }

  return (
    <Drawer variant="permanent" anchor="right">
      <Box
        p={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        minWidth={200}
      >
        <Avatar sx={{ width: 64, height: 64, mb: 2 }}>پ</Avatar>
        <Typography variant="h6">{USER_INFO.full_name}</Typography>
        <Typography variant="body2">{USER_INFO.phone_number}</Typography>
        <Box mt={3}>
          <Button variant="contained" color="primary" fullWidth>
            آمار من
          </Button>
          <Button
            variant="text"
            color="secondary"
            onClick={() => LogOut()}
            fullWidth
            sx={{ mt: 1 }}
          >
            خروج از حساب کاربری
          </Button>
          <Link href="/">برگشت به صفحه اصلی</Link>
        </Box>
      </Box>
    </Drawer>
  );
}
