import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Container, Divider } from "@mui/material";
import FooterContactMenu from "./FooterContactMenu";
import FooterSideMenues from "./FooterSideMenues";
import FooterBottomLine from "./FooterBottomLine";

const menu = [
  ["وضعیت زیرساخت", `\\`],
  ["حریم خصوصی", `\\`],
  ["قوانین و شرایط", `\\`],
];

export default function Footer() {
  const footerStyle = {
    width: "100%",
    backgroundColor: "var(--footer-BG)",
    px: {
      xs: "30px",
      lgp: 0,
    },
    py: {
      xs: "50px",
      sm: "70px",
    },
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
    gap: "50px",
  };

  return (
    <Grid container component="footer" sx={footerStyle}>
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: {
            xs: "50px",
            sm: "90px",
          },
        }}
      >
        <Grid xs={12} container sx={footerContainerstyles}>
          <FooterContactMenu />
          <FooterSideMenues menu={menu} />
        </Grid>
        <Divider
          component="hr"
          orientation="horizontal"
          sx={{ backgroundColor: "#fff", display: { xs: "block", sm: "none" } }}
          flexItem
        />
        <FooterBottomLine menu={menu} />
      </Container>
    </Grid>
  );
}
