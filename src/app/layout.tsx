import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "@radix-ui/themes/styles.css";
import ThemeProvider from "@/components/ThemeProvider";
import { Toaster } from "react-hot-toast";
import MobHeader from "@/components/layout/MobHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edit this",
  description: "Edit this thing!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <Toaster position="bottom-right" reverseOrder={false} />
        <NextTopLoader showSpinner={false} color="#FFBB00" />
        <ThemeProvider>{children}</ThemeProvider>
        <MobHeader />
      </body>
    </html>
  );
}
