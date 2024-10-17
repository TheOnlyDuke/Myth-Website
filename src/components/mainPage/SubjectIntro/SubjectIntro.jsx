import { Box } from "@mui/material";
import SubjectIntroMenu from "./SubjectIntroMenu";
import SubjectIntroPictureSide from "./SubjectIntroPictureSide";

export default function SubjectIntro({}) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <SubjectIntroPictureSide />
      <SubjectIntroMenu />
    </Box>
  );
}
