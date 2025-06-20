import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  icons: {},
  openGraph: {  // The preview image for Discord, Twitter, etc.
    images: []
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}