import { Box, Container, Typography, Button, Divider } from "@mui/material";
import Image from "next/image";

export default function HeroSection() {
  const fs = require("fs");
  fs.writeFileSync(
    "test.png",
    "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAADMElEQVR4nOzVwQnAIBQFQYXff81RUkQCOyDj1YOPnbXWPmeTRef+/3O/OyBjzh3CD95BfqICMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMO0TAAD//2Anhf4QtqobAAAAAElFTkSuQmCC"
  );
  return (
    <Container
      sx={{
        height: "fit-content",
        display: "flex",
        alignItems: "center",
      }}
      disableGutters
      id="hero-section"
    >
      <Box
        sx={{
          display: "flex",
          height: {
            xs: "fit-content",
            sm: "605px",
          },
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          gap: {
            xs: "var(--gap)",
            sm: 0,
          },
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            position: "relative",
            margin: {
              xs: "auto",
              sm: 0,
            },
            width: {
              xs: "90%",
              sm: "470px",
            },
            aspectRatio: "320/420",
            // height: {
            //   xs: "415px",
            //   lg: "610px",
            // },
            "::after": {
              content: `"ارشمیدش، پدر علم ریاضی"`,
              opacity: 0,
              color: "var(--secondary-text)",
              transition: "all 250ms ease-in-out",
              position: "absolute",
              bottom: "2px",
              right: "7px",
            },
            ":hover": {
              "::after": {
                opacity: 100,
                bottom: "7px",
                right: "12px",
              },
            },
          }}
        >
          <Image
            src="/images/herosection.png"
            fill={true}
            alt="ارشمیدش، پدر علم ریاضی"
          />
        </Box>
        <Box
          className="flexColumn"
          sx={{
            width: { xs: "100%", sm: "42.5%" },
            gap: { xs: "30px", sm: undefined },
            direction: "rtl",
            justifyContent: "space-evenly !important",
          }}
        >
          <Typography
            variant="display"
            sx={{
              width: {
                xs: "75%",
                sm: "auto",
              },
            }}
          >
            یادگـیری مفـاهیم ریاضـی با بازی کـردن
          </Typography>
          <Typography variant="normalBody" sx={{ color: "text.secondary" }}>
            مجموعه سیگما با استفاده از جدید‌ترین متد ها مباحث غیر قابل فهم ریاضی
            را در حین بازی کردن و حل مثال به شما آموزش می‌دهد.
          </Typography>
          <Button variant="contained" sx={{ width: "195px", height: "65px" }}>
            آموزش رو شروع كنيد
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
