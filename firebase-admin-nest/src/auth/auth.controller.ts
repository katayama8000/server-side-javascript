import { Controller, Get, Post, Req, HttpException } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  @Post('auth')
  authfirebase(@Req() request: Request) {
    const idToken = request.body.id_token;
    const authService = new AuthService();
    authService.verifyIdToken(idToken);
    console.log(idToken);
    return { message: 'auth' };
  }

  @Get('test')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 304, description: 'I am crazy' })
  test() {
    // apiresponseの内容を表示
    return 'auth';
  }

  @Get('test/:id')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'ノットファウンド' })
  test2(@Req() request: Request) {
    // apiresponseの内容を表示
    console.log(request.params);
    if (request.params.id === '1') {
      throw new HttpException('I do not like 1', 200);
    }
    return 'auth';
  }

  @Post('create')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'ノットファウンド' })
  create(@Req() request: Request) {
    console.log(request.body);
    return 'This action adds a new cat';
  }
}
