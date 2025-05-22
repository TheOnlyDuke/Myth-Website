import { Box } from "@mui/material";
import IMItems from "./IMItems";
import IMtemp from "./IMtemp";

export default function ListedMenu({ data, bit = false }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "50px",
        p: "0 25px",
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {bit
        ? data.map(({ title, desc, picture }, index) => (
            <IMtemp
              key={index}
              title={title}
              desc={desc}
              picture={picture}
              direc={index % 2 ? "rtl" : "ltr"}
            />
          ))
        : data.map(({ title, desc, picture }, index) => (
            <IMItems
              key={index}
              title={title}
              desc={desc}
              picture={picture}
              direc={index % 2 ? "ltr" : "rtl"}
            />
          ))}
    </Box>
  );
}
