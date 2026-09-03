import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mistra.app"),
  title: "Mistra — The Personal Operating System | Your life, organized.",
  description:
    "Stop switching between 5 different apps. Mistra unifies your tasks, habits, notes, calendar, and goals into one calm, intelligent workspace.",
  keywords: [
    "Mistra",
    "Mistra OS",
    "Personal Operating System",
    "Productivity App",
    "Habit Tracker",
    "Task Manager",
    "Daily Planner",
    "Offline First Productivity",
  ],
  authors: [{ name: "Mistra Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mistra.app",
    title: "Mistra — The Personal Operating System",
    description:
      "Your life, organized. The all-in-one workspace unifying tasks, habits, notes, calendar, and goals into a calm, intelligent command center.",
    siteName: "Mistra",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Mistra Personal Operating System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mistra — The Personal Operating System",
    description: "Your life, organized. Unify your tasks, habits, notes, calendar, and goals with Mistra.",
    images: ["/icon.png"],
    creator: "@mistra_app",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-purple-100 selection:text-purple-900">
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-purple-100/70 via-indigo-50/40 to-transparent blur-3xl opacity-70" />
          <div className="absolute top-[35%] -right-40 w-[600px] h-[600px] bg-purple-50/50 rounded-full blur-[120px]" />
          <div className="absolute top-[60%] -left-40 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[120px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
