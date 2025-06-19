import { notFound } from 'next/navigation';
import { prisma } from '@/core/prisma';
import PublicProfileClient from '@/components/clientSide/Users/PublicProfile';
import { getEmotePath } from '@/core/utils/pathResolver';

export default async function UserProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const prams = await params;
  const { id } = prams;

  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      pointsHistory: {
        orderBy: { createdAt: 'asc' },
      },
    },
  });

  if (!user) return notFound();

  const settings = await prisma.userSettings.findUnique({
    where: { discordId: user.id },
  });

  const rankedUsers = await prisma.user.findMany({
    orderBy: { points: 'desc' },
    select: { id: true },
  });

  const rank = rankedUsers.findIndex((u: any) => u.id === user.id) + 1;

  const avatar = (getEmotePath(settings?.emoteAvatar) ?? user.avatar);
  const nameOverride = settings?.nameOverride || null;

  const profileData = {
    id: user.id,
    points: user.points,
    rank,
    streakTrivia: user.streakTrivia,
    createdAt: user.createdAt.toISOString(),
    pointsHistory: user.pointsHistory.map(p => ({
      createdAt: p.createdAt.toISOString(),
      points: p.points,
    })),
    ...(nameOverride ? { nameOverride } : { displayName: user.displayName }),
    avatar,
  };

  return <PublicProfileClient data={profileData} />;
}
