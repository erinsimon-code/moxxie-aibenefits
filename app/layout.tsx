import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Benefits Auto Agent — Car Insurance Savings Tips & Rate Comparison Resources",
  description: "Benefits Auto Agent helps drivers save on car insurance with plain-language savings tips, rate comparison checklists, and optional text reminders to review your coverage.",
  keywords: "car insurance savings tips, auto insurance discounts, compare auto insurance rates, insurance coverage checklist",
  openGraph: {
    title: "Benefits Auto Agent — Car Insurance Savings Tips",
    description: "Savings tips, rate comparison checklists, and optional text reminders to help you review your coverage and compare insurers.",
    siteName: "Benefits Auto Agent",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
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
