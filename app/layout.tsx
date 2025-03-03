import type { Metadata } from "next";
import "./globals.css";
// import { Outfit } from "next/font/google";
import Providers from "./providers";


// const outfit = Outfit({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "POS - next.js",
  description: "POS - next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`bg-gray-200`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
