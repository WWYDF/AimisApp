'use client';

import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Flame } from 'phosphor-react';
import { useRouter } from 'next/navigation';
import { Session } from 'next-auth';

type Props = {
  data: {
    id: string;
    avatar?: string | null;
    displayName?: string | null;
    nameOverride?: string | null;
    points: number;
    rank: number;
    streakTrivia: number;
    createdAt: string;
    pointsHistory: { createdAt: string; points: number }[];
  };
  session?: Session | null;
};

export default function PublicProfileClient({ data, session }: Props) {
  const router = useRouter();
  const displayName = data.nameOverride || data.displayName || 'Unnamed';
  const isSelf = (session && data.id == session.user.id);

  const chartData = {
    labels: data.pointsHistory.map(p => new Date(p.createdAt).toLocaleDateString()),
    datasets: [
      {
        label: 'Points',
        data: data.pointsHistory.map(p => p.points),
        borderColor: '#fc3ac2',
        backgroundColor: 'rgba(252, 58, 194, 0.1)',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <img
            src={data.avatar ?? '/i/emoticon/DefaultThumbsUp.png'}
            className="w-16 h-16 rounded-xl object-cover"
            alt="User Avatar"
          />
          <div>
            <h2 className="text-2xl font-bold">{displayName}</h2>
            <p className="text-gray-400 text-sm">Rank #{data.rank}</p>
          </div>
        </div>
        {isSelf && (
          <button
          className="px-4 py-2 bg-accent text-white rounded hover:bg-accent/80 transition cursor-pointer"
          onClick={() => router.push(`/user`)}
        >
          Edit Profile
        </button>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-800 rounded p-4 text-center">
          <p className="text-sm text-gray-400">Points</p>
          <p className="text-xl font-semibold">{data.points}</p>
        </div>
        <div className="bg-gray-800 rounded p-4 text-center flex flex-col items-center">
          <p className="text-sm text-gray-400">Trivia Streak</p>
          <div className="text-xl font-semibold flex items-center gap-1">
            {data.streakTrivia}
            {data.streakTrivia >= 10 && (
              <Flame
                size={16}
                weight="fill"
                className="text-orange-500 animate-pulse"
              />
            )}
          </div>
        </div>
        <div className="bg-gray-800 rounded p-4 text-center">
          <p className="text-sm text-gray-400">Joined</p>
          <p className="text-xl font-semibold">
            {new Date(data.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded p-6">
        <h3 className="text-lg font-semibold mb-4">Points History</h3>
        <Line data={chartData} />
      </div>
    </div>
  );
}
