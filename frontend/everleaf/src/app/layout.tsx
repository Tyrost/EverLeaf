import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Red_Hat_Display } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { dark } from "@clerk/themes";

import { ThemeProvider } from "@/components/core/ThemeProvider";



const redhat = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-redhat",
  weight: ["300", "500", "700"],
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "500", "800"],
});

// ------------------------------------------------------------------------------------------------

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'EverLeaf',
  description: 'Agriculture Anywhere',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider
      afterSignInUrl={"/dashboard"}
      afterSignOutUrl={"/"}
      afterSignUpUrl={"/auth/login"}
      publishableKey={key}
      appearance={{ theme: dark }}
    >
      <html lang="en">
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <body
          className={`${geistSans.variable} ${geistMono.variable} 
        ${redhat.variable} ${outfit.variable} antialiased`}
        >
            {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
