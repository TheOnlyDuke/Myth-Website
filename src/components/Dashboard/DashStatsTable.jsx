import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  Typography,
} from "@mui/material";

export default function DashStatsTable({ data }) {
  return (
    <Box mt={4}>
      <TableContainer
        component={Paper}
        sx={{ direction: "rtl", boxShadow: 0, bgcolor: "transparent" }}
      >
        <Table sx={{ border: 0 }}>
          <TableHead>
            <TableRow sx={{ border: 0 }}>
              <TableCell align="right" sx={{ border: 0 }}>
                <Typography variant="normalBody">تاریخچه حل سوالات</Typography>
              </TableCell>
              <TableCell align="right" sx={{ border: 0 }}>
                <Typography variant="normalBody">زمان و تاریخ</Typography>
              </TableCell>
              <TableCell align="right" sx={{ border: 0 }}>
                <Typography variant="normalBody">امتیاز دریافتی</Typography>
              </TableCell>
              <TableCell align="right" sx={{ border: 0 }}>
                <Typography variant="normalBody">
                  تعداد درست و نادرست
                </Typography>
              </TableCell>
              <TableCell align="right" sx={{ border: 0 }}>
                <Typography variant="normalBody">دسترسی‌ها</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} sx={{ border: 0 }}>
                <TableCell align="right" sx={{ border: 0 }}>
                  <Typography variant="smallBodyCap">{row.subject}</Typography>
                </TableCell>
                <TableCell align="right" sx={{ border: 0 }}>
                  <Typography variant="smallBodyCap">
                    {row.date} - {row.time}
                  </Typography>
                </TableCell>
                <TableCell align="right" sx={{ border: 0 }}>
                  <Typography variant="smallBodyCap">{row.score}</Typography>
                </TableCell>
                <TableCell align="right" sx={{ border: 0 }}>
                  <Typography variant="smallBodyCap">
                    {row.correct} درست و {row.incorrect} نادرست
                  </Typography>
                </TableCell>
                <TableCell align="right" sx={{ border: 0 }}>
                  <Typography variant="smallBodyCap"></Typography>
                  👁️
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
