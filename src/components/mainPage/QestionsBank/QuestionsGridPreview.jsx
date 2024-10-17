import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Questions } from "@/utils/dummydatas";
import QuestionPreview from "./QuestionPreview";
import { Button } from "@mui/material";

export default function QuestionsGridPreview() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          height: "250px",
          left: "0",
          right: "0",
          bottom: "0",
          background:
            "linear-gradient(to bottom, rgb(0,0,0,0)  , var(--not-active-BG) 90%)",
          pointerEvents: "none",
          zIndex: 998,
        },
      }}
    >
      {Questions.map((each, index) => (
        <QuestionPreview
          key={index}
          title={each.title}
          icon={each.icon}
          group={each.group}
          difficulty={each.difficulty}
          score={each.score}
          latex={each.latex}
        />
      ))}
      <Button
        sx={{
          position: "absolute",
          bottom: "25px",
          left: 0,
          right: 0,
          margin: "auto",
          width: "235px",
          zIndex: 999,
        }}
      >
        مشاهده همه سوالات
      </Button>
    </Grid>
  );
}
