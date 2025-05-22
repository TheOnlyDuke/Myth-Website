"use client";
import {
  Drawer,
  Box,
  Avatar,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import NotificationsIcon from "@mui/icons-material/Notifications";
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
  console.log(USER_INFO);
  if (!USER_INFO) return null;

  const navButtStyle = {
    width: "100%",
    bgcolor: "transparent",
    color: "text.primary",
    justifyContent: "flex-start",
    flexDirection: "row-reverse",
    "& .MuiButton-startIcon": {
      marginLeft: "8px",
      marginRight: 0,
    },
    "&:hover": {
      color: "var(--activeText)",
    },
  };
  return (
    <Box
      sx={{
        width: 320,
        border: "2px solid var(--border)",
        margin: "20px",
        borderRadius: "var(--border-radius)",
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
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="smallBody" fontWeight="bold">
              {USER_INFO.user.full_name}
            </Typography>
            <Typography variant="smallBody" color="text.secondary">
              {USER_INFO.user.phone_number}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "75px",
              aspectRatio: "1/1",
              borderRadius: "var(--border-radius)",
              border: "1px solid rgba(0, 0, 0, 0.12)",
            }}
          >
            <Avatar
              sx={{
                width: 50,
                height: 50,
                bgcolor: "primary.main",
                fontSize: "2rem",
              }}
            >
              {USER_INFO.user.full_name?.[0]}
            </Avatar>
          </Box>
        </Box>
        <Divider sx={{ width: "100%", my: 2 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            width: "100%",
            minHeight: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Button
              variant="contained"
              fullWidth
              sx={navButtStyle}
              startIcon={<AccountCircleIcon />}
            >
              آمار من
            </Button>
            <Button
              variant="contained"
              fullWidth
              sx={navButtStyle}
              startIcon={<MenuBookIcon />}
            >
              مباحث
            </Button>
            <Button
              variant="contained"
              fullWidth
              sx={navButtStyle}
              startIcon={<NotificationsIcon />}
            >
              اطلاع رسانی
            </Button>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link
              href="/"
              style={{
                width: "100%",
                textDecoration: "none",
              }}
            >
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mb: 1,
                  bgcolor: "var(--blackBG)",
                  justifyContent: "flex-start",
                  flexDirection: "row-reverse",
                  "&:hover": {
                    bgcolor: "transparent",
                    color: "text.primary",
                  },
                }}
                startIcon={null}
              >
                صفحه اصلی
              </Button>
            </Link>
            <Button
              variant="outlined"
              color="error"
              onClick={handleLogout}
              fullWidth
              sx={{
                justifyContent: "flex-start",
                flexDirection: "row-reverse",
              }}
              startIcon={null}
            >
              خروج از حساب
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
