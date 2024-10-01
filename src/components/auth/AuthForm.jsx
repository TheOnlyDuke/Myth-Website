import { Box } from "@mui/material"

export default function AuthForm({onSubmit , children}) {
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        mt: 3,
        direction: "rtl",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {children}
    </Box>
  )
}