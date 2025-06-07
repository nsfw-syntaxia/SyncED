import "./globals.css";

export const metadata = {
  title: "SyncED",
  description: "A student portal.",
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
