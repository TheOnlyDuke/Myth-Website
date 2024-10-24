import { Box } from "@mui/material";
import QuestionPreview from "./QuestionPreview";

export default function ScrollableView({ questions }) {
  return (
    <Box
      sx={{
        display: { xs: "block", sm: "none" },
        width: "100%",
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
        position: "relative",
        direction: "rtl",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          pb: 2,
          px: 2,
          width: "fit-content",
        }}
      >
        {questions.map((each, index) => (
          <Box
            key={index}
            sx={{
              minWidth: "280px",
              flexShrink: 0,
            }}
          >
            <QuestionPreview
              title={each.title}
              icon={each.icon}
              group={each.group}
              difficulty={each.difficulty}
              score={each.score}
              latex={each.latex}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
