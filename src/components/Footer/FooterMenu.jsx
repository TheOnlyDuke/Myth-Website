import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/material";
import Link from "next/link";

export default function FooterMenu({ menuData }) {
  const titlesStyle = {
    fontSize: "20px",
    fontWeight: "600",
    color: "var(--active-text)",
    marginBottom: "35px",
  };

  return (
    <Grid lg={4}>
      <Box id="footerLogo" sx={titlesStyle}>
        {menuData.title}
      </Box>
      <Box component="ul" aria-labelledby="footerLogo">
        {menuData.items.map((item) => {
          return (
            <li key={item[0]}>
              <Link href={item[1]}>{item[0]}</Link>
            </li>
          );
        })}
      </Box>
    </Grid>
  );
}
