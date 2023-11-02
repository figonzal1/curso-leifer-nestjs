import { IsNotEmpty, IsEmail } from 'class-validator';
import { Sucursal } from 'src/sucursal/entities/sucursal.entity';

export class CreateEjecutivoDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  apellido: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  rut: string;

  @IsNotEmpty()
  sucursal: Sucursal;
}
