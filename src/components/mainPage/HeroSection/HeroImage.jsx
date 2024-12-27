import { Box } from "@mui/material";
import Image from "next/image";
import { heroStyles } from "./styles";

export default function HeroImage() {
  return (
    <Box sx={heroStyles.imageContainer}>
      <Image
        src="/images/herosection.png"
        fill={true}
        alt="ارشمیدش، پدر علم ریاضی"
        priority
      />
    </Box>
  );
}
