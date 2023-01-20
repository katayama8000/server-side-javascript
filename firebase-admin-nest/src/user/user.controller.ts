import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  userService = new UserService();
  @Get('id')
  getUser() {
    return this.userService.getUser();
  }

  @Get(':facilityId/facility-users')
  //findAll(@Param('facilityId') facilityId: string): unknown {
  findAll(@Param() params: { facilityId: string }): unknown {
    return this.userService.findAll(params.facilityId);
  }
}
