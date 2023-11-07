import mongoose, { HydratedDocument } from 'mongoose';
import { Sucursal } from 'src/sucursal/entities/sucursal.entity';
export type EjecutivosDocument = HydratedDocument<Ejecutivo>;
export declare class Ejecutivo {
    nombre: string;
    apellido: string;
    rut: string;
    email: string;
    sucursal: Sucursal;
}
export declare const EjecutivoSchema: mongoose.Schema<Ejecutivo, mongoose.Model<Ejecutivo, any, any, any, mongoose.Document<unknown, any, Ejecutivo> & Ejecutivo & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Ejecutivo, mongoose.Document<unknown, {}, mongoose.FlatRecord<Ejecutivo>> & mongoose.FlatRecord<Ejecutivo> & {
    _id: mongoose.Types.ObjectId;
}>;
