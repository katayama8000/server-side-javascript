import { User } from '../../src/users/entities/user.entity';
import { faker } from '@faker-js/faker';
import { CreateUserDto } from '../../src/users/dto/create-user.dto';

export const generateMockUser = (count = 1) => {
  const users: User[] = [];
  for (let i = 0; i < count; i++) {
    users.push({
      id: faker.datatype.number(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      isActive: faker.datatype.boolean(),
      createdDate: new Date(),
      updatedDate: new Date(),
    });
  }

  return users;
};

export const generateCreateUserDto: () => CreateUserDto = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  isActive: faker.datatype.boolean(),
});

export const toUserEntity: (CreateUserDto) => User = (dto) => ({
  id: faker.datatype.number(),
  firstName: dto.firstName,
  lastName: dto.lastName,
  isActive: dto.isActive,
  createdDate: new Date(),
  updatedDate: new Date(),
});
