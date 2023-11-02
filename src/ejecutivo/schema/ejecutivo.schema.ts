import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Sucursal } from 'src/sucursal/entities/sucursal.entity';

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

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sucursal',
    required: true,
  })
  sucursal: Sucursal;
}

export const EjecutivoSchema = SchemaFactory.createForClass(Ejecutivo);
