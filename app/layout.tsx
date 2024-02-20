import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BMI Calculator",
  description: "Better understand your weight in relation to your height.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
