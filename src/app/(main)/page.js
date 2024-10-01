import { Container, Box } from "@mui/material";
import HeroSection from "@/components/mainPage/HeroSection";

export default function Home() {

  const mainPageStyles = {
    "::before": {
      content: `""`,
      width: "100%",
      height: "auto",
      aspectRatio: "1920 / 756",
      position: "absolute",
      top: "200px",
      zIndex: "-1",
      backgroundImage: "url(/svg/herosection.svg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      filter: "url('#blur')",
      filter: {
        xs: "blur(7.5vw)",
        md: "blur(5vw)",
      },
    },
    flex: 1,
    minHeight: "2000px",
    display: "flex",
    justifyContent: "center",
  }

  return (
    <Box
      component="main"
      sx={mainPageStyles}
    >
      <Container maxWidth="lg">
        <HeroSection />
      </Container>
    </Box>
  );
}
