import { TriviaQuestions } from '@/core/objects/trivia';
import { getCurrentTrivia } from '@/core/storage';
import { FastifyPluginAsync } from 'fastify';

const trivia: FastifyPluginAsync = async (fastify) => {
  // Fetches today's current trivia question & answer (this is a private API lol)
  fastify.get('/', async (req, reply) => {
    const current = getCurrentTrivia()

    if (!current) { return reply.status(500).send({ error: 'No trivia question set' }) };

    const question = TriviaQuestions.find(q => q.id === current)
    if (!question) { return reply.status(500).send({ error: 'Logged trivia question not found' }) };

    return reply.status(200).send(question);
  });
};

export default trivia;