import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "./theme/ThemeContext";
import CssBaseline from "@mui/material/CssBaseline";

export const metadata = {
  title: "Myth",
  description: "Math: Modern metholpgy",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
