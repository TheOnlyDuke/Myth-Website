import { Box, Typography } from "@mui/material";
import QuestionsGridPreview from "./QuestionsGridPreview";

const number = 1400;

export default function QuestionBankPreview() {
  return (
    <Box
      className="flexColumn"
      sx={{
        gap: "50px",
        position: "relative",
      }}
    >
      <Typography variant="title">
        <span style={{ display: "block" }}>
          بیش از <span style={{ color: "var(--active-BG)" }}>{number}</span>{" "}
          سوال
        </span>
        در بانک سوالات سیگما
      </Typography>
      <QuestionsGridPreview />
    </Box>
  );
}
