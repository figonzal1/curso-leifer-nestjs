import { IsNotEmpty, IsEmail } from 'class-validator';

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
}
