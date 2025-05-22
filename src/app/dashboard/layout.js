import ResponsiveContainer from "@/components/ResponsiveContainer";
export default function DashBoardLayout({ children }) {
  return (
    <ResponsiveContainer
      component="main"
      sx={{
        py: "100px",
        minHeight: "100dvh",
      }}
    >
      {children}
    </ResponsiveContainer>
  );
}
