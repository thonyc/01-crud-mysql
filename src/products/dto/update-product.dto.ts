
//export class UpdateProductDto extends PartialType(CreateProductDto) {}
import { IsString,MinLength,IsNumber,IsNotEmpty } from "class-validator";
export class UpdateProductDto{

    @IsString()
    @MinLength(1)
    product_name: string='';
  
    @IsString()
    description: string='';
  
    @IsNumber()
    @IsNotEmpty()
    price: number=0;

}