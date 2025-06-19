import { NextResponse } from 'next/server';
import { prisma } from '@/core/prisma';
import { getEmotePath } from '@/core/utils/pathResolver';

export async function GET() {
  const users = await prisma.user.findMany({
    orderBy: { points: 'desc' },
    take: 50,
    select: {
      id: true,
      displayName: true,
      avatar: true,
      points: true,
      streakTrivia: true,
      games: {
        select: {
          won: true,
        },
      },
      settings: {
        select: {
          nameOverride: true,
          emoteAvatar: true
        }
      }
    },
  });

  const leaderboard = users.map((user: any, index: any) => {
    const totalGames = user.games.length;
    const wins = user.games.filter((g: any) => g.won).length;
    const winRate = totalGames > 0 ? Math.round((wins / totalGames) * 100) : 0;
    const name = user.settings.nameOverride ?? user.displayName;
    const avatar = (getEmotePath(user.settings.emoteAvatar) ?? user.avatar) ?? '/i/emoticon/DefaultThumbsUp.png';

    return {
      rank: index + 1,
      id: user.id,
      displayName: name,
      avatar: avatar,
      points: user.points,
      streakTrivia: user.streakTrivia,
      winRate: `${winRate}%`,
    };
  });

  return NextResponse.json(leaderboard);
}