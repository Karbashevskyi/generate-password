import { Injectable } from '@nestjs/common';
import { generate } from 'generate-password-ts/dist/generate';
import { Options } from 'generate-password-ts/dist/Options';

@Injectable()
export class AppService {
  public defaultConfig: Options = {
    length: 10,
    numbers: false,
    symbols: false,
    uppercase: false,
    lowercase: false,
  };

  public config: Options = {
    length: 10,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
  };

  public getHello(query: Options = null): {
    message: string;
    password: string;
    passwordConfig: Options
  } {
    const passwordConfig: Options = (Object.keys(query)?.length ? {...this.defaultConfig, ...query} : null) ?? this.config;
    return {
      message: 'Hello world!',
      password: this.generatePassword(query),
      passwordConfig,
    };
  }

  public generatePassword(query: Options = null): string {
    return generate(query ?? this.config);
  }


}
