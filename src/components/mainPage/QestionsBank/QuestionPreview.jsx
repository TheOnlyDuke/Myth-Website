import DotDivider from "@/components/DotDivider";
import { Paper, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import SvgIcon from "@mui/material/SvgIcon";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import Link from "next/link";

export default function QuestionPreview({
  id,
  title,
  group,
  difficulty,
  score,
  icon,
  latex,
  QB = false,
}) {
  return (
    <Grid xs={12} sm={QB ? 12 : 3} sx={{ width: "100%" }}>
      <Link href={`/questions/${id}`}>
        <Paper
          className="flexColumn"
          sx={{
            gap: "50px",
            backgroundColor: "var(--not-active-BG)",
            boxShadow: "none",
            border: "1px solid",
            borderColor: "var(--border)",
            borderRadius: "var(--border-radius)",
            transition: "all 200ms ease-out",
            direction: "ltr",
            cursor: "pointer",
            "*": {
              transition: "inherit",
              cursor: "inherit",
            },
            p: "30px",
            ":hover": {
              backgroundColor: "var(--black-BG)",
              ".katex *": {
                color: "var(--active-text)",
              },
              ".MuiTypography-normalBody": {
                color: "var(--active-text)",
              },
              path: {
                stroke: "var(--not-active-BG)",
              },
              ".MuiTypography-smallBodyCap": {
                color: "var(--secondary-active-text)",
              },
            },
          }}
        >
          <Box className="flexRow">
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <SvgIcon sx={{ width: "24px", height: "24px", fill: "none" }}>
                {icon}
              </SvgIcon>
            </Box>
            <Box sx={{ direction: "rtl" }}>
              <Typography variant="normalBody">{title}</Typography>
              <Typography variant="smallBodyCap">
                {group} <DotDivider /> {difficulty}
                <DotDivider /> {score} امتیاز
              </Typography>
            </Box>
          </Box>
          <Box>
            <BlockMath math={latex} />
          </Box>
        </Paper>
      </Link>
    </Grid>
  );
}
