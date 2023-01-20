import { Controller, Get, Param } from '@nestjs/common';
import type { FacilityUser } from 'src/types/user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  userService = new UserService();
  @Get('id')
  getUser() {
    return this.userService.getUser();
  }

  @Get(':facilityId/facility-users')
  findAll(@Param('facilityId') facilityId: string): Promise<FacilityUser[]> {
    return this.userService.findAll(facilityId);
  }
}
