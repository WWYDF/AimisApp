import ShopClient from '@/components/clientSide/Shop/ShopClient';
import { auth } from '@/components/serverSide/authenticate'
import { shopItems } from '@/core/objects/shopItems';
import { prisma } from '@/core/prisma'
import { redirect } from 'next/navigation';

export default async function ShopPage() {
  const session = await auth();
  const user = await prisma.user.findUnique({
    where: { id: session?.user.id },
    include: { items: true }
  });

  if (!session || !user) {
    redirect('/')
  }

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
