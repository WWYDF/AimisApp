import { TriviaTier1, TriviaTier2, TriviaTier3, TriviaTier4, TriviaTier5 } from '@/core/objects/trivia';
import { getCurrentTrivia } from '@/core/storage';
import { FastifyPluginAsync } from 'fastify';

const allQuestions = [
  ...TriviaTier1,
  ...TriviaTier2,
  ...TriviaTier3,
  ...TriviaTier4,
  ...TriviaTier5
];

const trivia: FastifyPluginAsync = async (fastify) => {
  // Fetches today's current trivia question & answer (this is a private API lol)
  fastify.get('/', async (req, reply) => {
    const currentIds = getCurrentTrivia();

    if (!currentIds || !Array.isArray(currentIds)) {
      return reply.status(500).send({ error: 'No trivia questions set' });
    }

    const selected = currentIds.map((id) => {
      const found = allQuestions.find(q => q.id === id);
      if (!found) {
        console.warn(`⚠️ Trivia question with ID ${id} not found`);
      }
      return found;
    }).filter(Boolean);

    if (selected.length !== currentIds.length) {
      return reply.status(500).send({ error: 'One or more trivia questions are missing' });
    }

    return reply.status(200).send(selected);
  });
};

export default trivia;