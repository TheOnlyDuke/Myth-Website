"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Button,
} from "@mui/material";
import { useState, useEffect, useRef, useCallback } from "react";
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

const preventScroll = (e) => {
  e.preventDefault();
};

const disableScroll = () => {
  document.body.style.overflow = 'hidden';
  document.addEventListener('wheel', preventScroll, { passive: false });
};

const enableScroll = () => {
  document.body.style.overflow = '';
  document.removeEventListener('wheel', preventScroll);
};

function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const timeoutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isPassedHero, setIsPassedHero] = useState(false);
  const lastScrollY = useRef(0);
  const headerRef = useRef(null);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (isPassedHero) {
      if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      }
    } else {
      setIsVisible(true);
    }

    lastScrollY.current = currentScrollY;
  }, [isPassedHero]);

  useEffect(() => {
    const heroSection = document.getElementById("hero-section");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPassedHero(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (heroSection) {
      observer.observe(heroSection);
    }

    let frameId;
    const onScroll = () => {
      frameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frameId);
    };
  }, [handleScroll]);

  const handleMouseEnter = (menuId) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(menuId);
    disableScroll();
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
      enableScroll();
    }, 300);
  };

  return (
    <div onMouseLeave={handleMouseLeave}>
      <AppBar
        ref={headerRef}
        position="fixed"
        sx={{
          backgroundColor: "var(--not-active-BG)",
          height: "fit-content",
          boxShadow: "none",
          py: "15px",
          transition: "transform 0.3s ease-in-out",
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
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
              <Link href="/" style={{ "margin-left": "15px" }}>
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
                <Link
                  href="/learning"
                  onMouseEnter={() => handleMouseEnter("subjects")}
                >
                  مباحث
                </Link>
                <Link
                  href="/blogs"
                  onMouseEnter={() => handleMouseEnter("belogs")}
                >
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
              <Button
                sx={{
                  backgroundColor: "var(--not-active-BG)",
                  p: "17px 20px",
                  my: "5px",
                  "&:hover": {
                    path: {
                      stroke: "#fff",
                    },
                    ".MuiTypography-smallBody": {
                      color: "var(--active-text)",
                    },
                  },
                }}
              >
                <GlobeIcon
                  width="21px"
                  height="21px"
                  stroke="var(--black-BG)"
                  sx={{ marginLeft: "5px" }}
                />
                <Typography variant="smallBody">فارسی</Typography>
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
