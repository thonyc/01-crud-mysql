import { IsString, IsNumber, IsNotEmpty, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(1)
  product_name:string='';

  @IsString()
  description: string='';

  @IsNumber()
  @IsNotEmpty()
  price: number=0;


  // Puedes agregar más propiedades según tus necesidades
}
