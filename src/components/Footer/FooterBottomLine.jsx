import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";

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
      <Grid id="footerRules&Etc" xs={6} container sx={{
        justifyContent: "space-evenly"
      }}>
        <Grid>
          <Typography variant="smallBody">
            <Link href="\">وضعیت زیرساخت</Link>
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="smallBody">
            <Link href="\">حریم خصوصی</Link>
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="smallBody">
            <Link href="\">قوانین و شرایط</Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
