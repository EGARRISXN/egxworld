import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/Theme-Provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "egxblog",
  description: "You have to start somewhere.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth antialiased`}
    >
      <body className="x">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="x">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
