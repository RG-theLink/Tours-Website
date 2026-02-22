import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

/* ── Typography ── */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

/* ── SEO metadata ── */
export const metadata: Metadata = {
  title: "Wildpulse Photographic Tours | Luxury Namibia Safari Expeditions",
  description:
    "Exclusive photographic expeditions designed to capture the wild, untamed beauty of Namibia. Expert guides, golden-hour access, and custom 4×4 safari vehicles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${jakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
