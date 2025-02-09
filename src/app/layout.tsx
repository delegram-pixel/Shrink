import type { Metadata } from "next";
import './globals.css'
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes'

export const metadata: Metadata = {
  title: "Shrink",
  description: "",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <ClerkProvider
   appearance={{
    baseTheme: dark,
  }}>
      <html lang="en">
        <body>
        
          {children}
        </body>
      </html>
      </ClerkProvider>
  )
}
