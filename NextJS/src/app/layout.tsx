import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import AuthProvider from '@/components/clientSide/AuthProvider';
import Navbar from '@/components/clientSide/Navbar';
import Footer from '@/components/clientSide/Footer';
import { ToastProvider } from '@/components/clientSide/Toast';
import UptimeToast from '@/components/clientSide/UptimeKuma';
import PlausibleProvider from 'next-plausible';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  title: {
    default: `AiMi's App`,
    template: `%s | AiMi's App`
  },
  description: "Quirky games for Omega Strikers",
  icons: { // Favicon
   icon: '/i/misc/logo.webp'
  },
  openGraph: {  // The preview image for Discord, Twitter, etc.
    images: []
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta property="og:image" content="https://aimis.app/i/misc/logo.webp" />
      <head />
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <main className="flex-grow">
        <PlausibleProvider domain="aimis.app">
          <AuthProvider>
            <Navbar />
              <ToastProvider>
                {children}
              </ToastProvider>
          </AuthProvider>
          <UptimeToast />
        </PlausibleProvider>
        </main>
        <Footer />
      </body>
    </html>
  )
}