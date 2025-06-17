'use client';
import { useEffect, useState } from 'react';

type LeaderboardEntry = {
  rank: number;
  id: string;
  displayName: string | null;
  avatar: string | null;
  points: number;
  streakTrivia: number;
  winRate: string;
};

export default function LeaderboardPage() {
  const [data, setData] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    fetch('/api/leaderboards')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">🏆 Leaderboard</h1>
      <table className="w-full text-sm text-left border border-zinc-700 rounded overflow-hidden">
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
                {user.avatar ? (
                  <img src={user.avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-zinc-700" />
                )}
                <span>{user.displayName || 'Unnamed'}</span>
              </td>
              <td className="p-3">{user.points}</td>
              <td className="p-3">{user.streakTrivia}</td>
              <td className="p-3">{user.winRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
