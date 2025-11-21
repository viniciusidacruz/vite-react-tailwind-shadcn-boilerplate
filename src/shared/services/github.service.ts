import { BASE_API } from '@/shared/lib'
import type { User } from '@/shared/types'

export class GithubService {
  async getAllUsers(): Promise<User[]> {
    const response = await BASE_API.get('/users')
    return response.data
  }
}
