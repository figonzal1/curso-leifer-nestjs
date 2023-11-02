import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EjecutivosDocument = Ejecutivos & Document;

@Schema()
export class Ejecutivos {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  apellido: string;

  @Prop({ unique: true, required: true })
  rut: string;

  @Prop({ unique: true, required: true })
  email: string;
}

export const EjecutivosSchema = SchemaFactory.createForClass(Ejecutivos);
