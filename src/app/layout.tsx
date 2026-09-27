import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEON GAMING — Premium Gaming Lounge | Indrapuri Sector C, Bhopal",
  description:
    "Bhopal's most premium gaming lounge in Indrapuri Sector C. PS5 consoles, pool tables, and Racing Sim. Mon-Fri 12-11 PM, Sat-Sun 11 AM-10 PM.",
  keywords: ["gaming cafe bhopal", "NEON GAMING", "ps5 bhopal", "gaming lounge Indrapuri", "PC gaming bhopal"],
  openGraph: {
    title: "NEON GAMING — The Premium Gaming Lounge | Indrapuri Sector C, Bhopal",
    description: "Where legends are made. PS5, PC, Pool & Private Rooms.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const removeAttrs = () => {
                    if (document.body) {
                      document.body.removeAttribute('cz-shortcut-listen');
                    }
                  };
                  removeAttrs();
                  window.addEventListener('DOMContentLoaded', removeAttrs);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
