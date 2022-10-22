import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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

  @Prop()
  password: string;
}

export const PasswordSchema = SchemaFactory.createForClass(Password);
