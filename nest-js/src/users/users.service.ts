import { Injectable } from '@nestjs/common';

export type User = { username: string; password: string };

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      username: 'user',
      password: 'pword',
    },
  ];
  async findUser(givenName: string): Promise<User | undefined> {
    return this.users.find(({ username }) => username === givenName);
  }
}
