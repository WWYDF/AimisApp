'use client';
import renderBadges from '@/components/clientSide/BadgePill';
import { Badge } from '@prisma/client';
import { usePlausible } from 'next-plausible';
import Link from 'next/link';
import { Flame } from 'phosphor-react';
import { useEffect, useState } from 'react';

type LeaderboardEntry = {
  rank: number;
  id: string;
  displayName: string | null;
  avatar: string; // API already nullcases this
  points: number;
  streakTrivia: number;
  winRate: string;
  badges: Badge[]
};

export default function LeaderboardPage() {
  const [data, setData] = useState<LeaderboardEntry[]>([]);
  const plausible = usePlausible()

  useEffect(() => {
    fetch('/api/leaderboards')
      .then(res => res.json())
      .then(setData);

    plausible('leaderboard')
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-10 md:px-4">
      <h1 className="text-3xl font-bold text-center mb-8">🏆 Leaderboard</h1>
      <table className="w-full text-sm text-left border border-zinc-700 rounded overflow-hidden shadow-xl">
        <thead className="bg-zinc-800 text-white">
          <tr>
            <th className="p-3">Rank</th>
            <th className="p-3">User</th>
            <th className="p-3">Points</th>
            <th className="p-3">Streak</th>
            <th className="p-3">Win Rate</th>
          </tr>
        </thead>
        <tbody className="bg-zinc-900 divide-y divide-zinc-800 text-white">
          {data.map(user => (
            <tr key={user.id}>
              <td className="p-3 font-semibold text-accent">{user.rank}</td>
              <td className="p-3 flex items-center gap-3">
                <img src={user.avatar} alt="Avatar" className="w-8 h-8 rounded-xl" />
                <Link
                  href={`/user/${user.id}`}
                  className='font-semibold hover:underline hover:text-accent transition'
                >
                  {user.displayName || 'Unnamed'}
                </Link>
                {user.badges && (renderBadges(user.badges))}
              </td>
              <td className="p-3">{user.points}</td>
              <td className="p-3 items-center gap-1">
                {user.streakTrivia}
                {/* {user.streakTrivia >= 10 && (
                  <Flame
                    size={16}
                    weight="fill"
                    className="text-orange-500 animate-pulse"
                  />
                )} */}
              </td>
              <td className="p-3">{user.winRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
