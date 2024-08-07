"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Box,
  Button,
  Container,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggleButton";

const HeaderStyles = {
  navlinks: {
    marginLeft: "25px",
    display: "flex",
  },
  logo: {
    flexGrow: 1,
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: "50px",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
};

function Header() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "var(--not--active-BG)" }}>
      <Container disableGutters={true} maxWidth="lg">
        <Toolbar
          disableGutters={true}
          sx={{
            ...HeaderStyles.flex,
            direction: "rtl",
            mx: {
              xs: "25px",
              lgp: "0",
            },
          }}
        >
          <Box sx={{ ...HeaderStyles.flex, width: "15%" }}>
            <Link href="/">
              <Image src={""} alt="لوگو تیم" />
            </Link>
            <Box sx={{ ...HeaderStyles.flex, width: "75%" }}>
              <Link href="/learning">مباحث</Link>
              <Link href="/blogs">وبلاگ</Link>
              <Link href="/leaderboard">لیدربورد</Link>
            </Box>
          </Box>
          <Box>
            <ThemeToggle />
            <Link href="/signup">ورود یا ثبت نام</Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
