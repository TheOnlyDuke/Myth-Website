import { Box } from "@mui/material";
import SubjectIntroMenu from "./SubjectIntroMenu";
import SubjectIntroPictureSide from "./SubjectIntroPictureSide";

export default function SubjectIntro() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column-reverse", sm: "row" },
        gap: { xs: "var(--gap)", sm: undefined },
      }}
    >
      <SubjectIntroPictureSide />
      <SubjectIntroMenu />
    </Box>
  );
}
