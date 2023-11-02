import { IsNotEmpty } from 'class-validator';

export class CreateSucursalDto {
  @IsNotEmpty()
  nombre: string;
}
