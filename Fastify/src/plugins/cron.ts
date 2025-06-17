import fp from 'fastify-plugin';
import cron from 'node-cron';
import { FastifyPluginAsync } from 'fastify';
import { allTiers, qWeights } from '@/core/objects/trivia';
import { setCurrentTrivia } from '@/core/storage';

const cronPlugin: FastifyPluginAsync = async (fastify) => {
  
  // Every 12 hours, cycle trivia question
  cron.schedule('0 0 * * *', async () => {
    fastify.log.info('[>] Cycling trivia question...');

    const questionIds = getRandomTriviaSet();
  
    setCurrentTrivia(questionIds);
    
    fastify.log.info(`[>] Picked Questions: ${questionIds}`);
  });

  fastify.log.info('[+] Cronjobs Initialized!');
};

function weightedRandom(weights: Record<number, number>): number {
  const entries = Object.entries(weights) as [string, number][];
  const total = entries.reduce((sum, [, w]) => sum + w, 0);
  const rand = Math.random() * total;
  let acc = 0;

  for (const [tierStr, weight] of entries) {
    acc += weight;
    if (rand <= acc) return parseInt(tierStr);
  }

  // fallback (shouldn't hit)
  return parseInt(entries[entries.length - 1][0]);
}

function getRandomTriviaSet(): number[] {
  const selectedIds: number[] = [];

  for (let qNum = 1; qNum <= 5; qNum++) {
    const tier = weightedRandom(qWeights[qNum]) as 1 | 2 | 3 | 4 | 5;

    const pool = allTiers[tier];
    if (!pool || pool.length === 0) {
      throw new Error(`No questions available for tier ${tier}`);
    }

    // Pick one at random
    const selected = pool[Math.floor(Math.random() * pool.length)];
    selectedIds.push(selected.id);
  }

  return selectedIds;
}

export default fp(cronPlugin);