import { SixKPlusSharp } from "@mui/icons-material";
import { Container } from "@mui/material";

export default function ResponsiveContainer({ children, sx }) {
  return (
    <Container
      maxWidth="lg"
      disableGutters
      sx={{
        px: {
          sx: "5vw",
          sm: "10vw",
          lgp: 0,
        },
      }}
    >
      {children}
    </Container>
  );
}
