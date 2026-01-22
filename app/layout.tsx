import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-black text-black dark:text-white`}>
        <header className="p-4 bg-white dark:bg-zinc-900 shadow-md">
          <h1 className="text-xl font-bold">B2B Orders</h1>
        </header>
        <main className="p-6 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
