"use client";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useState, useCallback, memo } from "react";
import { useScrollVisibility } from "@/hooks/useScrollVisibility";
import Link from "next/link";
import ThemeToggle from "./ThemeToggleButton";
import HeaderMenu from "./HeaderMenu";
import { useAuth } from "@/contexts/AuthContext";
import ResponsiveContainer from "../ResponsiveContainer";
import { HEADER_STYLES, NAVIGATION_ITEMS } from "./constants";
import { MenuIcon } from "./MenuIcon";

const NavigationLink = memo(({ href, label, onMouseEnter, onClick }) => (
  <Link href={href} onMouseEnter={onMouseEnter} onClick={onClick}>
    {label}
  </Link>
));
NavigationLink.displayName = "NavigationLink";

function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const { isVisible } = useScrollVisibility("hero-section");
  const { USER_INFO } = useAuth();

  const handleMouseEnter = useCallback((menuId) => {
    setOpenMenu(menuId);
    document.body.style.overflow = "hidden";
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpenMenu(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <div onMouseLeave={handleMouseLeave}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "var(--notActiveBG)",
          height: "fit-content",
          boxShadow: "none",
          py: "15px",
          transition: "transform 0.3s ease-in-out",
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <ResponsiveContainer maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              ...HEADER_STYLES.flex,
              direction: "rtl",
              mx: { xs: "25px", lgp: "0" },
            }}
          >
            <Box
              sx={{ ...HEADER_STYLES.flex, width: "25%", alignItems: "center" }}
            >
              <Link href="/" style={{ marginLeft: "15px" }}>
                <Typography variant="smallTitle">سیگما</Typography>
              </Link>

              <Box
                sx={{
                  ...HEADER_STYLES.flex,
                  width: "70%",
                  color: "var(--secondary-text)",
                  display: { xs: "none", sm: "flex" },
                }}
              >
                {NAVIGATION_ITEMS.map(({ href, label, menuId }) => (
                  <NavigationLink
                    key={href}
                    href={href}
                    label={label}
                    onMouseEnter={() => menuId && handleMouseEnter(menuId)}
                    onClick={handleMouseLeave}
                  />
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                ...HEADER_STYLES.flex,
                alignItems: "center",
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Typography sx={HEADER_STYLES.signUpButton}>
                <Link href={USER_INFO ? "/dashboard" : "/auth"}>
                  {USER_INFO
                    ? `داشبورد - ${USER_INFO.user.full_name}`
                    : "ورود یا ثبت نام"}
                </Link>
              </Typography>
              <ThemeToggle />
            </Box>

            <Box sx={{ display: { xs: "flex", sm: "none" } }}>
              <MenuIcon />
            </Box>
          </Toolbar>
        </ResponsiveContainer>
      </AppBar>

      {openMenu && (
        <HeaderMenu handleMouseLeave={handleMouseLeave} openMenu={openMenu} />
      )}
    </div>
  );
}

export default memo(Header);
