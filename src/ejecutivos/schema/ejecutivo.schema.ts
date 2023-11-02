import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EjecutivosDocument = HydratedDocument<Ejecutivo>;

@Schema()
export class Ejecutivo {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  apellido: string;

  @Prop({ unique: true, required: true })
  rut: string;

  @Prop({ unique: true, required: true })
  email: string;
}

export const EjecutivoSchema = SchemaFactory.createForClass(Ejecutivo);
