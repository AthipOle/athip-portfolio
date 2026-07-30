import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Athip Saenpakdee | Software Tester (QA) Portfolio",
  description:
    "Portfolio of Athip Saenpakdee, a Computer Science student seeking a Software Tester (QA) co-op internship.",
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
