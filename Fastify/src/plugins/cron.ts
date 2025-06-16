import fp from 'fastify-plugin';
import cron from 'node-cron';
import { FastifyPluginAsync } from 'fastify';
import { TriviaQuestions } from '@/core/objects/trivia';
import { setCurrentTrivia } from '@/core/storage';

const cronPlugin: FastifyPluginAsync = async (fastify) => {
  
  // Every 12 hours, cycle trivia question
  cron.schedule('0 0 * * *', async () => {
    fastify.log.info('[>] Cycling trivia question...');

    const index = Math.floor(Math.random() * TriviaQuestions.length)
    const picked = TriviaQuestions[index]
  
    setCurrentTrivia(picked.id)
    
    fastify.log.info(`[>] Picked Question #${picked.id}`);
  });

  fastify.log.info('[+] Cronjobs Initialized!');
};

export default fp(cronPlugin);