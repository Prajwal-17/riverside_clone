import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ThemeProvider";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakartaSans.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main>
            {children}
            <Toaster richColors />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
