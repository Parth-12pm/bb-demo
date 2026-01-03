import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BharatBuild - Construction Field Management",
  description: "Interactive prototype for construction field management system with role-based workflows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Noto+Sans:wght@400;500;700&display=swap" 
          rel="stylesheet" 
        />
        {/* Material Symbols */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
