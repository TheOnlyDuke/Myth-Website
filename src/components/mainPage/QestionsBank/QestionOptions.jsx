import { Paper } from "@mui/material";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function QuestionOptions({ option, latex, handleSubmit }) {
  return (
    <Paper
      onClick={() => {
        handleSubmit(option);
      }}
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
      <BlockMath math={latex} />
    </Paper>
  );
}
