import "./globals.css";

export const metadata = {
  title: "BALKAPSO Internships",
  description: "Winter training at BALKAPSO.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
