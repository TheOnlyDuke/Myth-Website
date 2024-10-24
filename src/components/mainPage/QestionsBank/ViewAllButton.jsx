import { Button } from "@mui/material";

export default function ViewAllButton() {
  return (
    <Button
      sx={{
        position: { sm: "absolute" },
        bottom: { sm: "25px" },
        left: { sm: 0 },
        right: { sm: 0 },
        margin: { xs: " 30px auto 0 auto", sm: undefined },
        width: "235px",
        zIndex: 999,
      }}
    >
      مشاهده همه سوالات
    </Button>
  );
}
