import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEON GAMING — Premium Gaming Lounge | MP Nagar, Bhopal",
  description:
    "Bhopal's most premium gaming lounge in MP Nagar. PS5 consoles, RTX 4090 PCs, pool tables, private rooms, and 200+ titles. Open daily 10 AM – 11 PM.",
  keywords: ["gaming cafe bhopal", "NEON GAMING", "ps5 bhopal", "gaming lounge MP nagar", "PC gaming bhopal"],
  openGraph: {
    title: "NEON GAMING — The Premium Gaming Lounge | MP Nagar, Bhopal",
    description: "Where legends are made. PS5, PC, Pool & Private Rooms.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
