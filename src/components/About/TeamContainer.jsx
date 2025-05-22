import { Box, Card, Typography } from "@mui/material";
import CardsContainer from "./CardContainer";

export default function TeamContainer({ teamTitle, data, bit }) {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
        width: "100%",
      }}
    >
      <Card
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "solid 2px var(--border)",
          borderRadius: "var(--border-radius)",
          padding: "15px",
          direction: "rtl",
        }}
      >
        <Typography variant="smallTitle">{teamTitle}</Typography>
      </Card>
      <CardsContainer data={data} bit={bit} />
    </Box>
  );
}
