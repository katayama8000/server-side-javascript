import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import { UserNotFoundException } from 'src/user/exceptions/UserNotFound.exception';
import { SerializedUser } from 'src/user/types';

@Controller('users')
export class UserController {
  constructor(@Inject('USERS_SERVICE') private usersService) {}

  @Get('')
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get('all')
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  //   @UseInterceptors(ClassSerializerInterceptor)
  @Get('username/:username')
  getUsersByUsername(@Param('username') username: string) {
    const user = this.usersService.getUsersByUsername(username);
    if (user) return new SerializedUser(user);
    else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }

  //   @UseInterceptors(ClassSerializerInterceptor)
  //   @UseFilters(HttpExceptionFilter)
  @Get('id/:id')
  getUserById(@Param('id') id: number) {
    console.log(typeof id);
    const user = this.usersService.getUserById(id);
    console.log(user);
    if (user) {
      console.log('user: ', user);
      return new SerializedUser(user);
    } else {
      console.log('user not found');
      throw new UserNotFoundException('User not found', 400);
    }
  }

  @Post('create')
  //   @UsePipes(ValidationPipe)
  createUser(@Body() CreateUserDto: CreateUserDto) {
    return this.usersService.createUser(CreateUserDto);
  }
}
