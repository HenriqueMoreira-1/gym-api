import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Henrique Moreira de Souza',
    email: 'henriquemoreiradesouza4@gmail.com',
  },
})
