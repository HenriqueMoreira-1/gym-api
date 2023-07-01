import { expect, it, describe, beforeEach, vi, afterEach } from 'vitest'
import { InMemoryCheckInsRepository } from '@/repositories/inMemory/in-memory-check-ins-repository'
import { CheckInUseCase } from './check-in'

let checkInsRepository: InMemoryCheckInsRepository
let sut: CheckInUseCase

describe('Check-ins Use Case', () => {
  beforeEach(() => {
    checkInsRepository = new InMemoryCheckInsRepository()
    sut = new CheckInUseCase(checkInsRepository)

    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('Should be able to check in', async () => {
    vi.setSystemTime(new Date(2023, 8, 1, 8, 0, 0))

    const { checkIn } = await sut.execute({
      gymId: 'any_gym_id',
      userId: 'any_user_id',
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })

  it('Should not be able to check in twice in the same day', async () => {
    vi.setSystemTime(new Date(2023, 8, 1, 8, 0, 0))

    await sut.execute({
      gymId: 'any_gym_id',
      userId: 'any_user_id',
    })

    await expect(() =>
      sut.execute({
        gymId: 'any_gym_id',
        userId: 'any_user_id',
      }),
    ).rejects.toBeInstanceOf(Error)
  })

  it.skip('Should be able to check in twice but in different days', async () => {
    vi.setSystemTime(new Date(2023, 8, 1, 8, 0, 0))

    await sut.execute({
      gymId: 'any_gym_id',
      userId: 'any_user_id',
    })

    vi.setSystemTime(new Date(2023, 8, 2, 8, 0, 0))

    const { checkIn } = await sut.execute({
      gymId: 'any_gym_id',
      userId: 'any_user_id',
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })
})
