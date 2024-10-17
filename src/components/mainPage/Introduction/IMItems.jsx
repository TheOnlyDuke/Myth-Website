import { Box, Typography } from "@mui/material";

export default function IMItems({ direc, title, desc, picture }) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        flexDirection: direc === "rtl" ? "row" : "row-reverse",
      }}
    >
      <Box
        sx={{
          justifyContent: "space-between",
          direction: "rtl",
          width: "475px",
        }}
      >
        <Typography variant="title" sx={{ marginBottom: "30px" }}>
          {title}
        </Typography>
        <Typography variant="normalBodyCap">{desc}</Typography>
      </Box>
      <Box>{picture}</Box>
    </Box>
  );
}
