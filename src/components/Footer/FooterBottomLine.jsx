import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";

export default function FooterBottomLine({menu}) {
  return (
    <Grid
      xs={12}
      id="footerLisence&RulesBox"
      container
      sx={{
        height: "fit-content",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid xs={12} sm={6} id="footerLisence">
        <Typography variant="smallBody">
          ©️ 1401 - تمامی حقوق این وبسایت متعلق به گروه فلان می‌باشد.
        </Typography>
      </Grid>
      <Grid
        id="footerRules&Etc"
        xs={6}
        container
        sx={{
          justifyContent: "space-evenly",
          display: {
            xs: "none",
            sm: "flex",
          },
        }}
      >
        {menu.map((each, index) => (
          <Typography variant="smallBody" key={index}>
            <Link href={each[1]} style={{ cursor: "pointer" }}>
              {each[0]}
            </Link>
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
}
