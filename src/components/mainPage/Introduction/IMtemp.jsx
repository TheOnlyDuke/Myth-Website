import { GlobeIconNew } from "@/utils/icons";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function IMtemp({ direc, title, desc, picture }) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: {
          xs: "column",
          sm: direc === "rtl" ? "row" : "row-reverse",
        },
      }}
    >
      <Box
        sx={{
          justifyContent: "space-between",
          direction: "rtl",
          width: {
            sx: "100%",
            sm: "700px",
          },
        }}
      >
        <Typography
          variant="title"
          sx={{
            marginBottom: "30px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {title}
        </Typography>
        <Typography variant="normalBodyCap">{desc}</Typography>
      </Box>
      <Image src={picture} alt="Myth" width={400} height={400} />
    </Box>
  );
}
