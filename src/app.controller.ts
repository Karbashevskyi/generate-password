import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Options } from 'generate-password-ts/dist/Options';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  public root(@Query() query: Options): any {
    return this.appService.getHello(query);
  }
}
