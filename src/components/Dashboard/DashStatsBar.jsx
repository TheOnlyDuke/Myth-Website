import Grid from "@mui/material/Unstable_Grid2";
import { Card, Typography } from "@mui/material";

export default function ({}) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Card
          sx={{ p: 2, bgcolor: "#6200ea", color: "white", textAlign: "center" }}
        >
          <Typography variant="h5">117</Typography>
          <Typography>امتیاز خام شما</Typography>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card
          sx={{ p: 2, bgcolor: "#6200ea", color: "white", textAlign: "center" }}
        >
          <Typography variant="h5">12</Typography>
          <Typography>رتبه شما</Typography>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card
          sx={{ p: 2, bgcolor: "#6200ea", color: "white", textAlign: "center" }}
        >
          <Typography variant="h5">1156</Typography>
          <Typography>سوالات حل شده</Typography>
        </Card>
      </Grid>
    </Grid>
  );
}
