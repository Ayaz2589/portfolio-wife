import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components";
import { ActiveSectionContextProvider } from "@/context";
import { BackgroundAnimation } from "@/components";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tasnuva's Portfolio",
  description: "Tasnuva's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative`}>
        <BackgroundAnimation />
        <ActiveSectionContextProvider>
          {children}
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
