import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Fúria Fan Chat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`bg-zinc-950 antialiased ${poppins.variable}`}>
          <main>
            {children}
          </main>
          <Toaster richColors/>
      </body>
    </html>
  );
}
