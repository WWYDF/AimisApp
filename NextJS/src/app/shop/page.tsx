import ShopClient from '@/components/clientSide/Shop/ShopClient';
import { auth } from '@/components/serverSide/authenticate'
import { shopItems } from '@/core/objects/shopItems';
import { prisma } from '@/core/prisma'
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  title: {
    default: `Shop`,
    template: `%s | AiMi's App`
  },
  description: "Spend your points in the shop to acquire some cosmetics.",
  icons: { // Favicon
   icon: '/i/misc/logo.webp'
  },
  openGraph: {  // The preview image for Discord, Twitter, etc.
    images: []
  },
}

export default async function ShopPage() {
  const session = await auth();

  if (!session) redirect('/user/login');
  
  const user = await prisma.user.findUnique({
    where: { id: session?.user.id },
    include: { items: true }
  });

  if (!user) redirect('/error/500'); // fuck it idc

  // IDs of owned items
  const ownedIds = new Set(user.items.map((i) => i.itemId))

  // Filter out owned items
  const availableItems = shopItems.filter((item) => !ownedIds.has(item.id))

  return (
    <ShopClient
      initialPoints={user.points}
      availableItems={availableItems}
    />
  )
}
