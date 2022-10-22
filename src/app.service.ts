import { Injectable } from '@nestjs/common';
import { generate } from 'generate-password-ts/dist/generate';
import { Options } from 'generate-password-ts/dist/Options';
import { Model } from 'mongoose';
import {
  Password,
  PasswordDocument,
} from './repositories/entities/password.entity';
import { InjectModel } from '@nestjs/mongoose';

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
    passwordConfig: Options;
  } {
    const passwordConfig: Options =
      (Object.keys(query)?.length
        ? { ...this.defaultConfig, ...query }
        : null) ?? this.config;
    return {
      message: 'Hello world!',
      password: this.generatePassword(query),
      passwordConfig,
    };
  }

  constructor(
    @InjectModel(Password.name)
    private readonly passwordModel: Model<PasswordDocument>,
  ) {}

  public generatePassword(query: Options = null): string {
    return generate(query ?? this.config);
  }

  public async save(password: string): Promise<void> {
    const passwordModel: PasswordDocument = new this.passwordModel(password);
    await passwordModel.save();
  }

  public async deleteAll(): Promise<void> {
    await this.passwordModel.deleteMany();
  }

  public async getAll(): Promise<PasswordDocument[]> {
    return this.passwordModel.find();
  }
}
