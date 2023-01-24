import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import { Repository } from 'typeorm';
import { SerializedUser, User } from './types';
import { User as UserEntity } from '../typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  private users: User[] = [
    { id: 1, username: 'denny', password: 'denny' },
    { id: 2, username: 'zedd', password: 'zedd' },
    { id: 3, username: 'qin', password: 'qin' },
    { id: 4, username: 'cat', password: 'cat' },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getAllUsers() {
    return this.userRepository.find();
  }

  getUsersByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto) {
    console.log('createUserDto: ', createUserDto);
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }
}
