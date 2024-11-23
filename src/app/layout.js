import "./fontiran.css";
import "./globals.css";
import { ThemeProvider } from "./theme/ThemeContext";

export const metadata = {
  title: "Sigma",
  description: "Sigma: where math meets excietment!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
