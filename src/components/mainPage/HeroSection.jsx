import { Box, Container, Typography, Button } from "@mui/material";
import Image from "next/image";
import { DisplayLarge } from "@/font/Typography";

export default function HeroSection() {
  const fs = require("fs");
  fs.writeFileSync("test.png", "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAADMElEQVR4nOzVwQnAIBQFQYXff81RUkQCOyDj1YOPnbXWPmeTRef+/3O/OyBjzh3CD95BfqICMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMO0TAAD//2Anhf4QtqobAAAAAElFTkSuQmCC")
  return (
    <Container
      sx={{ height: "calc(100lvh)", display: "flex", alignItems: "center" }}
      disableGutters
    >
      <Box
        sx={{
          display: "flex",
          height: {
            xs: "90vh",
            sm: "605px",
          },
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: {
              xs: "320px",
              lg: "470px",
            },
            height: {
              xs: "415px",
              lg: "610px",
            },
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
          sx={{
            width: "42.5%",
            direction: "rtl",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly"
          }}
        >
          <Typography variant="display">
            یادگـیری مفـاهیم ریاضـی با بازی کـردن
          </Typography>
          <Typography variant="normalBody" sx={{color : "text.secondary"}}>
            مجموعه فلان با استفاده از جدید‌ترین متد ها مباحث غیر قابل فهم ریاضی
            را در حین بازی کردن و حل مثال به شما آموزش می‌دهد.
          </Typography>
          <Button variant="contained" sx={{width: "195px",height: "65px"}}>آموزش رو شروع كنيد</Button>
        </Box>
      </Box>
    </Container>
  );
}
