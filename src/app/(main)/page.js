import { Container, Box } from "@mui/material";
import {
  DownloadSection,
  SubjectIntro,
  QuestionBankPreview,
  IntroductionMenu,
  HeroSection,
} from "@/components/mainPage";

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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: "125px",
  };

  return (
    <Box component="main" sx={mainPageStyles}>
      <Container
        maxWidth="lg"
        className="flexColumn"
        disableGutters
        sx={{
          gap: { xs: "100px", sm: "150px" },
          paddingBottom: "150px",
          px: "25px",
        }}
      >
        <HeroSection />
        <IntroductionMenu />
        <SubjectIntro />
        <QuestionBankPreview />
      </Container>
      <DownloadSection />
    </Box>
  );
}
