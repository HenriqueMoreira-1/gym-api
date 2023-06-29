import { expect, it, describe } from 'vitest'
import { InMemoryUsersRepository } from '@/repositories/inMemory/in-memory-users-repository'
import { AuthenticateUseCase } from './authenticate'
import { hash } from 'bcryptjs'

describe('Authenticate Use Case', () => {
  it('Should be able to authenticate', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const sut = new AuthenticateUseCase(usersRepository)

    await usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@mail.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({
      email: 'johndoe@mail.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })
})
