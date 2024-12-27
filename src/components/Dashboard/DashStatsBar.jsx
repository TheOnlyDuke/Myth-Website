import Grid from "@mui/material/Unstable_Grid2";
import { Card, Typography } from "@mui/material";
import { useAuth } from "@/contexts/AuthContext";

export default function DashStatsBar() {
  const { USER_INFO } = useAuth();

  const stats = [
    {
      value: USER_INFO?.score || 0,
      label: "امتیاز خام شما",
      color: "#6200ea",
    },
    {
      value: USER_INFO?.rank || "N/A",
      label: "رتبه شما",
      color: "#0091ea",
    },
    {
      value: USER_INFO?.solved_questions || 0,
      label: "سوالات حل شده",
      color: "#00bfa5",
    },
  ];

  return (
    <Grid container spacing={3}>
      {stats.map((stat, index) => (
        <Grid key={index} xs={12} sm={4}>
          <Card
            elevation={2}
            sx={{
              p: 3,
              bgcolor: stat.color,
              color: "white",
              textAlign: "center",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              {stat.value}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, opacity: 0.9 }}>
              {stat.label}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
