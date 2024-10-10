import { Box } from "@mui/material";
import Image from "next/image";

export default function SubjectIntroPicture({ src, alt, pos }) {
  return (
    <Box
      sx={{
        position: "absolute",
        borderTop: "2px solid",
        borderRight: "2px solid",
        borderBottom: "6px solid",
        borderLeft: "6px solid",
        borderColor: "var(--black-BG)",
        width: "550px",
        height: "350px",
        top: pos === 2 ? "125px" : pos == 1 ? 0 : undefined,
        bottom: pos === 0 ? 0 : undefined,
        left: pos === 2 ? 0 : undefined,
        right: pos === 0 ? 0 : pos == 1 ? "150px" : undefined,
        zIndex: 999 - pos,
      }}
    >
      <Image src={src} layout="fill" alt={alt} />
    </Box>
  );
}
