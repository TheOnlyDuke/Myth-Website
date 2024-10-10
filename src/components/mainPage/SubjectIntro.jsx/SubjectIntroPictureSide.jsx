import { Box } from "@mui/material";
import SubjectIntroPicture from "./SubjectIntroPicture";
import { SubjectIntroPics } from "@/utils/dummydatas";

export default function SubjectIntroPictureSide() {
  return (
    <Box
      sx={{ position: "relative", p: "105px 85px 35px 225px", width: "900px", height: "600px" }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "var(--active-BG)",
        }}
      ></Box>
      {SubjectIntroPics.map((each, index) => (
        <SubjectIntroPicture
          key={index}
          src={each.src}
          alt={each.alt}
          pos={index}
        />
      ))}
    </Box>
  );
}
