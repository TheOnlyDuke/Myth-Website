import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";

const menu = ["وضعیت زیرساخت", "حریم خصوصی", "قوانین و شرایط"];

export default function FooterBottomLine({}) {
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
      <Grid xs={6} id="footerLisence">
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
        }}
      >
        {menu.map((each, index) => (
          <Typography variant="smallBody" key={index}>
            <Link href="\" style={{ cursor: "pointer" }}>
              {each}
            </Link>
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
}
