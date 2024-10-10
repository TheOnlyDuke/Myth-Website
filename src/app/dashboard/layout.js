import { Box } from "@mui/material";

export default function DashBoardLayout({children}) {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        p: "0",
        m: "0",
        height: "100%",
      }}
    >
      {children}
    </Box>
  );
}
