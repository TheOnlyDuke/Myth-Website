"use client";
import { AppBar, Toolbar, Typography, Box, Container, Button } from "@mui/material";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggleButton";
import HeaderMenu from "./HeaderMenu";
import { GlobeIcon } from "@/utils/icons";

const HeaderStyles = {
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  SignUpButton: {
    width: "150px",
    height: "65px",
    m: "5px",
    marginLeft: "0",
    backgroundColor: "var(--active-BG)",
    borderRadius: "15px",
    color: "var(--active-text)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 250ms ease-in-out",
    ":hover": {
      backgroundColor: "var(--black-BG)",
    },
  },
};

function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menuId) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(menuId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 300);
  };

  return (
    <div onMouseLeave={handleMouseLeave}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "var(--not-active-BG)",
          height: "fit-content",
          boxShadow: "none",
          py: "15px",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              ...HeaderStyles.flex,
              direction: "rtl",
              mx: {
                xs: "25px",
                lgp: "0",
              },
            }}
          >
            <Box sx={{ ...HeaderStyles.flex, width: "25%" }}>
              <Link href="/" style={{ "margin-left" : "15px"}}>
                {/* <Image src={""} alt="لوگو تیم" /> */}
                <Typography variant="smallTitle">لوگو تیم</Typography>
              </Link>
              <Box
                sx={{
                  ...HeaderStyles.flex,
                  width: "70%",
                  color: "var(--secondary-text)",
                  display: {
                    xs: "none",
                    sm: "flex",
                  },
                }}
              >
                <Link href="/learning" onMouseEnter={() => handleMouseEnter("subjects")}>
                  مباحث
                </Link>
                <Link href="/blogs" onMouseEnter={() => handleMouseEnter("belogs")}>
                  وبلاگ
                </Link>
                <Link href="/leaderboard">لیدربورد</Link>
              </Box>
            </Box>
            <Box
              sx={{
                ...HeaderStyles.flex,
                flexDirection: "row",
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Button sx={{
                backgroundColor: "var(--not-active-BG)",
                p: "17px 20px",
                my: "5px",
                "&:hover": {
                  path: {
                    stroke: "#fff",
                  },
                  ".MuiTypography-smallBody": {
                    color: "var(--active-text)"
                  }
                }
              }}>
                <GlobeIcon width="21px" height="21px" stroke="var(--black-BG)" sx={{marginLeft:"5px"}}/>
                <Typography variant="smallBody">
                  فارسی
                </Typography>
              </Button>
              <ThemeToggle />
              <Typography sx={HeaderStyles.SignUpButton}>
                <Link href="/auth">ورود یا ثبت نام</Link>
              </Typography>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "flex",
                  sm: "none",
                },
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="4" rx="2" fill="#1E1E1E" />
                <rect y="16" width="20" height="4" rx="2" fill="#1E1E1E" />
                <rect y="8" width="13" height="4" rx="2" fill="#1E1E1E" />
              </svg>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {openMenu && (
        <HeaderMenu handleMouseLeave={handleMouseLeave} openMenu={openMenu} />
      )}
    </div>
  );
}

export default Header;
