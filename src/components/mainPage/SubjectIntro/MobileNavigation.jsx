"use client";

import { Box } from "@mui/material";
import { useState, useEffect } from "react";

export default function MobileNavigation({ totalSlides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const images = document.querySelectorAll("[data-slide-image]");
    images.forEach((image, index) => {
      if (index === activeIndex) {
        image.style.display = window.innerWidth < 600 ? "block" : "";
        image.style.opacity = "1";
      } else {
        image.style.display = window.innerWidth < 600 ? "none" : "";
        image.style.opacity = window.innerWidth < 600 ? "0" : "1";
      }
    });
  }, [activeIndex]);

  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "none" },
        position: "absolute",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
        gap: "8px",
        justifyContent: "center",
        width: "100%",
        pb: 2,
        zIndex: 1000,
      }}
    >
      {Array.from({ length: totalSlides }).map((_, index) => (
        <Box
          key={index}
          onClick={() => setActiveIndex(index)}
          sx={{
            width: index === activeIndex ? "24px" : "8px",
            height: "8px",
            borderRadius: "4px",
            backgroundColor:
              index === activeIndex ? "var(--activeBG)" : "var(--blackBG)",
            transition: "all 0.3s ease-in-out",
            cursor: "pointer",
          }}
        />
      ))}
    </Box>
  );
}
