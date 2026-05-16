import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "DEVOS SINGULARITY | Autonomous Software Engineering Civilization",
  description: "Next-generation autonomous software engineering operating system and AI-native developer civilization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground antialiased selection:bg-primary/30`}>
        <div className="fixed inset-0 grid-bg pointer-events-none -z-10" />
        <div className="fixed inset-0 bg-gradient-to-tr from-background via-transparent to-primary/5 pointer-events-none -z-10" />
        {children}
      </body>
    </html>
  );
}

