import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Athip Saenpakdee | Full Stack Developer Portfolio",
  description:
    "Portfolio of Athip Saenpakdee, a Computer Science student seeking a Full Stack Developer co-op internship.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
