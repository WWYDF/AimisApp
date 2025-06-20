import { notFound } from 'next/navigation';
import { prisma } from '@/core/prisma';
import PublicProfileClient from '@/components/clientSide/Users/PublicProfile';
import { getEmotePath } from '@/core/utils/pathResolver';
import { auth } from '@/components/serverSide/authenticate';
import { Metadata } from 'next';

// Generate metadata dynamically using data
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const targetUser = await prisma.user.findUnique({ where: { id: params.id }, include: { settings: true } });

  if (!targetUser) {
    return {
      title: `Error 404`,
      description: `The provided ID does not resolve to an active user. Sorry about that.`,
    };
  }

  const rankedUsers = await prisma.user.findMany({
    orderBy: { points: 'desc' },
    select: { id: true },
  });

  const rank = rankedUsers.findIndex((u: any) => u.id === targetUser.id) + 1;
  const createdAt = targetUser.createdAt.toISOString();

  return {
    title: `User '${targetUser.settings?.nameOverride ? targetUser.settings?.nameOverride : targetUser.displayName}'`,
    description: `Rank: #${rank}\nPoints: ${targetUser.points}\nJoined: ${new Date(createdAt).toLocaleDateString()}`,
  };
}

export default async function UserProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const prams = await params;
  const { id } = prams;
  const session = await auth();

  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      pointsHistory: {
        orderBy: { createdAt: 'asc' },
      },
      badges: true
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

  const avatar = (getEmotePath(settings?.emoteAvatar) ?? user.avatar) ?? '/i/emoticon/DefaultThumbsUp.png';
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
    badges: user.badges,
  };

  return <PublicProfileClient data={profileData} session={session} />;
}
