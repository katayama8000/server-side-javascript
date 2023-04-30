import { Controller, Get } from '@nestjs/common';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  private readonly cityService: CityService = new CityService();
  @Get('/')
  getDoc(): Promise<void> {
    return this.cityService.getDoc();
  }

  @Get('/collection')
  getCollection(): Promise<void> {
    return this.cityService.getCollection();
  }

  @Get('/query')
  getQuery(): Promise<void> {
    return this.cityService.getQuery();
  }
}
