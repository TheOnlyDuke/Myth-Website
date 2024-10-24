import { Box } from "@mui/material";
import SubjectIntroPicture from "./SubjectIntroPicture";
import { SubjectIntroPics } from "@/utils/dummydatas";
import MobileNavigation from "./MobileNavigation";

export default function SubjectIntroPictureSide() {
  return (
    <Box
      sx={{
        position: "relative",
        p: { xs: 0, sm: "105px 85px 35px 225px" },
        width: { xs: "100%", sm: "900px" },
        height: { xs: "fit-content", sm: "600px" },
        display: "flex",
        gap: "10px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "var(--active-BG)",
          display: {
            xs: "none",
            sm: "block",
          },
        }}
      />
      <Box sx={{ width: "100%" }}>
        {SubjectIntroPics.map((each, index) => (
          <SubjectIntroPicture
            key={index}
            src={each.src}
            alt={each.alt}
            pos={index}
          />
        ))}
      </Box>
      <MobileNavigation totalSlides={SubjectIntroPics.length} />
    </Box>
  );
}
