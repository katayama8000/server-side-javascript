import { Controller, Get, Param } from '@nestjs/common';
import type { FacilityUser } from 'src/types/user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  userService = new UserService();

  @Get('test1')
  getTest1User() {
    return this.userService.getTest1User();
  }

  @Get('family')
  getFamilyUser() {
    return this.userService.getFamilyUser();
  }

  @Get(':facilityId/facility-users')
  findAll(@Param('facilityId') facilityId: string): Promise<FacilityUser[]> {
    return this.userService.findAll(facilityId);
  }
}
