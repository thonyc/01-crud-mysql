// //import { Controller, Get, Post, Body, Patch, Param, Delete,NotFoundException } from '@nestjs/common';
// import { ProductService } from '../products/product.service';
// import { CreateProductDto } from './dto/create-product.dto'; // Importa el DTO de creación de productos
// import { UpdateProductDto } from './dto/update-product.dto'; // Importa el DTO de actualización de productos
// import { Product } from './entities/Product.entity';
// @Controller('api/v1/products')

// export class ProductController {
//   constructor(private readonly productsService: ProductService) { }

//   @Post()
//   create(@Body() createProductDto: CreateProductDto) {
//     return this.productsService.create(createProductDto);
//   }

//   @Get()
//   async findAll(): {
//     const products = await this.productsService.findAll();
    
//   }
  

//   @Get()
//   findOne(@Param('id') product_id: string) {
//     return this.productsService.findOne(product_id);
//   }


//   @Patch()
//   update(@Param('id') product_id:  string , @Body() updateProductDto: UpdateProductDto) {
//     return this.productsService.update((product_id), updateProductDto);
//   }
//   @Delete(':id')
//   async remove(@Param('id') product_id: string): Promise<void> {
//     try {

//       const existingProduct = await this.productsService.findOne(product_id);

//       if (!existingProduct) {
//         // Si no se encuentra el producto, lanza una excepción
//         throw new NotFoundException(`Product with ID ${product_id} not found`);
//       }
//       // Si el producto existe, procede a eliminarlo
//       await this.productsService.remove(product_id);
//     } catch (error) {
//       //     // Maneja cualquier error que pueda ocurrir
//       console.error("Error:", error);
//       throw error; // Lanza el error nuevamente para que se maneje adecuadamente a nivel de controlador
//     }
//   }



// }
import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { ProductService } from '../products/product.service';
import { CreateProductDto } from './dto/create-product.dto'; // Importa el DTO de creación de productos
import { UpdateProductDto } from './dto/update-product.dto'; // Importa el DTO de actualización de productos

@Controller('api/v1/products')
export class ProductController {
  constructor(private readonly productsService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  async findAll() {
    const products = await this.productsService.findAll();
    return products; // Devuelve la lista de productos
  }

  @Get(':id')
  findOne(@Param('id') product_id: number) {
    return this.productsService.findOne(product_id);
  }

  @Patch(':id')
  async update(@Param('id') product_id: number, @Body() updateProductDto: UpdateProductDto) {
    try {
      const existingProduct = await this.productsService.findOne(product_id);

      if (!existingProduct) {
        throw new NotFoundException(`Product with ID ${product_id} not found`);
      }

      const updatedProduct = await this.productsService.update(product_id, updateProductDto);
      return updatedProduct;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  @Delete(':id')
  async remove(@Param('id') product_id: number): Promise<void> {
    try {
      const existingProduct = await this.productsService.findOne(product_id);

      if (!existingProduct) {
        throw new NotFoundException(`Product with ID ${product_id} not found`);
      }

      await this.productsService.remove(product_id);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}
