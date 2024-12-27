import { Container } from "@mui/material";

export default function ResponsiveContainer({
  children,
  sx,
  maxWidth = "lg",
  disableGutters = false,
  ...props
}) {
  return (
    <Container
      maxWidth={maxWidth}
      disableGutters={disableGutters}
      sx={{
        px: {
          xs: "32px",
          sm: "48px",
          md: "64px",
          lg: "128px",
          lgp: "0px",
        },
        mx: "auto",
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Container>
  );
}
