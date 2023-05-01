import { Controller, Get, Param } from '@nestjs/common';
import { PlaceholderService } from './placeholder.service';
import { UserIntercafe } from './interface/user.interface';

@Controller('placeholder')
export class PlaceholderController {
  constructor(private readonly placeholderService: PlaceholderService) {}
  @Get('user')
  async getUser(): Promise<UserIntercafe> {
    return this.placeholderService.getUser();
  }

  @Get('allUser')
  async getAllUser(): Promise<UserIntercafe[]> {
    return this.placeholderService.getAllUser();
  }

  @Get(':postId')
  async getComments(@Param('postId') postId: number) {
    return this.placeholderService.getComments(postId);
  }
}
