import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import theme from "@/theme";

export const metadata: Metadata = {
  title: "Black Tulip",
  description:
    "Black Tulip is a contemporary gem and one of Tangier's premier dining destinations. Nestled in the vibrant Medina on Avenue Youssef Ibn Tachfine, it offers an unparalleled culinary experience in a stunning setting.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ margin: 0, padding: 0, height: "100vh", overflowX: "hidden" }}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
