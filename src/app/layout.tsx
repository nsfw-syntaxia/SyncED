import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SyncED",
  description: "A student portal.",
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
