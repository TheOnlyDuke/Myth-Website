import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/material";
import FooterContactMenu from "./FooterContactMenu";
import FooterSideMenues from "./FooterSideMenues";
import FooterBottomLine from "./FooterBottomLine";

export default function Footer() {
  const footerStyle = {
    height: "500px",
    width: "100%",
    backgroundColor: "var(--footer-BG)",
    px: "12.5vw",
    py: "5vh",
    direction: "rtl",
    color: "var(--secondary-text)",
    "*": {
      color: "var(--secondary-text)",
    },
    " li": {
      transition: "color 250ms ease-in-out",
      display: "flex",
      alignItems: "center",
      listStyle: "none",
      my: "20px",
    },
    " a": {
      position: "relative",
      "&::before": {
        transition: "background-color 250ms ease-in-out",
        content: `" "`,
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        backgroundColor: "none",
        position: "absolute",
        margin: "auto",
        top: "0",
        bottom: "0",
        right: "-12.5px",
      },
      ":hover": {
        color: "var(--active-text)",
        "&::before": {
          backgroundColor: "var(--not-active-BG)",
        },
      },
    },
  };

  const footerContainerstyles = {
    justifyContent: "space-between",
    alignItems: "center",
    height: "90%",
  };

  return (
    <Grid container component="footer" sx={footerStyle}>
      <Container maxWidth="lg" disableGutters>
        <Grid xs={12} container sx={footerContainerstyles}>
          <FooterContactMenu />
          <FooterSideMenues />
        </Grid>
        <FooterBottomLine />
      </Container>
    </Grid>
  );
}
