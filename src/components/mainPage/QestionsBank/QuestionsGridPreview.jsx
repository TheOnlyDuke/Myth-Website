import { Questions } from "@/utils/dummydatas";
import GridView from "./GridView";
import ScrollableView from "./ScrollableView";
import ViewAllButton from "./ViewAllButton";
import { Box } from "@mui/material";

export default function QuestionsGridPreview() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "cneter",
      }}
    >
      <GridView questions={Questions} />
      <ScrollableView questions={Questions} />
      <ViewAllButton />
    </Box>
  );
}
