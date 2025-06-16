import { FastifyPluginAsync } from 'fastify';
import trivia from './trivia';

const v1Routes: FastifyPluginAsync = async (fastify) => {
  fastify.register(trivia, { prefix: '/trivia' });
};

export default v1Routes;