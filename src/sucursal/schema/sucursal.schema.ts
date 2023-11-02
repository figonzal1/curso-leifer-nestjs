import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SucursalesDocument = HydratedDocument<Sucursal>;

@Schema({
  collection: 'sucursal',
})
export class Sucursal {
  @Prop({ required: true })
  nombre: string;
}

export const SucursalSchema = SchemaFactory.createForClass(Sucursal);
