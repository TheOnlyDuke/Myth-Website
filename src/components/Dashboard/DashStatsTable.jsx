import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper
} from "@mui/material";

export default function DashStatsTable({data}) {
  return (
    <Box mt={4}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>تاریخچه حل سوالات</TableCell>
              <TableCell align="right">زمان و تاریخ</TableCell>
              <TableCell align="right">امتیاز دریافتی</TableCell>
              <TableCell align="right">تعداد درست و نادرست</TableCell>
              <TableCell align="right">دسترسی‌ها</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.subject}</TableCell>
                <TableCell align="right">
                  {row.date} - {row.time}
                </TableCell>
                <TableCell align="right">{row.score}</TableCell>
                <TableCell align="right">
                  {row.correct} درست و {row.incorrect} نادرست
                </TableCell>
                <TableCell align="right">👁️</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
