import "./fontiran.css";
import "./globals.css";
import { ThemeProvider } from "./theme/ThemeContext";

export const metadata = {
  title: "Myth",
  description: "Math: Modern metholpgy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
