import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Aqib Abdul Ghaffar | Full-Stack Developer & IoT Engineer",
  description: "Awwwards-quality portfolio of Aqib Abdul Ghaffar — Final-Year CSE (IoT) Student specializing in production-ready MERN applications, AI, and embedded systems.",
  keywords: ["Aqib Abdul Ghaffar", "Full-Stack Developer", "IoT", "MERN Stack", "AI", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,500&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#0a0d14] text-gray-100 antialiased selection:bg-purple-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
