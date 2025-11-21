import type { User } from "@public/types";

export class GithubService {
  private readonly BASE_URL = "https://api.github.com";

  async getAllUsers(): Promise<User[]> {
    const response = await fetch(`${this.BASE_URL}/users`);
    return response.json();
  }
}
