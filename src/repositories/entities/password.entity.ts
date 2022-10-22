import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type PasswordDocument = Password & Document;

@Schema({
  timestamps: true,
  collection: 'password',
})
export class Password extends Document {
  @Prop({
    default: Password.name,
  })
  object: string;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  @Prop()
  password: string;
}

export const PasswordSchema = SchemaFactory.createForClass(Password);
