import { ThemeProvider } from "@/Providers/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google';
import "./globals.css";

const sg  = Space_Grotesk({
  subsets : ['latin'],
  weight : ['300','400','500','600','700'],
  variable :'--sg'
})


export const metadata: Metadata = {
  title: "Gen Resume",
  description: "Create your resume.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${sg.variable}  antialiased scroll-smooth min-h-screen w-full box-border`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
