import ListedMenu from "@/components/mainPage/Introduction/ListedMenu";
import { howToSteps } from "@/utils/dummydatas";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import { Typography } from "@mui/material";

export default function HowToPage() {
  return (
    <ResponsiveContainer component="main" sx={{ my: "130px" }}>
      <Typography variant="title">اموزش نحوه استفاده:</Typography>
      <ListedMenu data={howToSteps} bit={true} />
    </ResponsiveContainer>
  );
}
