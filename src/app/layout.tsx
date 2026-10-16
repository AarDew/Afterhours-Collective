import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/context/StoreContext";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { ToastNotification } from "@/components/ui/Toast";

const displayFont = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const interfaceFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Afterhours Collective | Your World. Your Wall. Your Collection.",
  description:
    "Design-led pop-culture collectibles. Art posters, dual-state illuminated reveal frames, and precision 3D display figures crafted for the things you never outgrew.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${interfaceFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#111111] text-white selection:bg-[#D94A36] selection:text-white">
        <StoreProvider>
          <AnnouncementBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <ToastNotification />
        </StoreProvider>
      </body>
    </html>
  );
}
