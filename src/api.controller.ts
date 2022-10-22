import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class ApiController {
  constructor(private readonly appService: AppService) {}

  @Post('api/password/:password')
  public savePassword(@Param() password: string): any {
    return this.appService.save(password);
  }

  @Delete('api/password')
  public deletePasswords(): any {
    return this.appService.deleteAll();
  }

  @Get('api/password')
  public getPassword(): any {
    return this.appService.getAll();
  }
}
