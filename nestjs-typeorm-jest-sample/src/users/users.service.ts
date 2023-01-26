import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (user === null) {
      throw new NotFoundException("Specified user doesn't exists");
    }

    return user;
  }

  async create(dto: CreateUserDto): Promise<User> {
    return await this.usersRepository.save(dto);
  }

  async update(id: number, dto: UpdateUserDto): Promise<User> {
    const res = await this.usersRepository.update(id, dto);
    if (res.affected === 0) {
      throw new NotFoundException("Specified user doesn't exists");
    }

    return await this.usersRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    const res = await this.usersRepository.softDelete(id);
    if (res.affected === 0) {
      throw new NotFoundException('Specified user id does not exists.');
    }
  }
}
