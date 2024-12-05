import { Typography, SvgIcon } from "@mui/material";
import Image from "next/image";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ArrowLeft } from "@/utils/icons";
import DotDivider from "../DotDivider";

export default function CategoryPaper({
  title,
  difficulty,
  numOfEpisodes,
  icon,
}) {
  
  return (
    <Grid2
      sx={{
        p: "30px",
        border: "1px solid",
        borderColor: "var(--border)",
        borderRadius: "20px",
        width: "340px",
        direction: "ltr",
        transition: "background-color 250ms ease-in-out",
        cursor: "pointer",
        "& *" : {
          cursor: "inherit"
        },
        "&:hover": {
          backgroundColor: "var(--black-BG)",
          '.MuiTypography-normalBody': {
            color: "var(--active-text)",
          },
          img: {
            display: "none",
          },
          svg: {
            display: "inline-block",
          },
        },
        '.MuiTypography-normalBody': {
          transition: "color 350ms ease-in-out",
        },
      }}
    >
      <Grid2 container alignItems="center" spacing={2}>
        <Grid2
          xs={2}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Image src={icon} width={30} height={30} alt={title} />
          <ArrowLeft sx={{width: "30px", height : "30px", display: "none"}} />
        </Grid2>
        <Grid2
          xs={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            direction: "rtl",
          }}
        >
          <Typography variant="normalBody">{title}</Typography>
          <Typography variant="smallBodyCap" sx={{ fontSize: "15px", color: "var(--secondary-text)" }}>
            {difficulty}{" "}
            <DotDivider />{" "}
            {numOfEpisodes} مبحث آموزشی
          </Typography>
        </Grid2>
      </Grid2>
    </Grid2>
  );
}
