import { Typography } from "@mui/material";

export default function LearningPage({ params }) {
  const id = params["learn-sec"];
  return (
    <main
      style={{
        marginTop: "209px",
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignitems: "center",
      }}
    >
      <Typography>In Development</Typography>
      <Typography>id : {id}</Typography>
    </main>
  );
}
