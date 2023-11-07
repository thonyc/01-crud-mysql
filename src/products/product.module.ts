import { Module } from '@nestjs/common';
import { ProductService } from './product.service'; // Cambia el nombre del servicio a 'ProductService'
import { ProductController } from './product.controller'; // Cambia el nombre del controlador a 'ProductController'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/Product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // Asegúrate de que TypeOrmModule incluya Product
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}


// //@Module({
//   imports:[TypeOrmModule.forFeature([Product])],
//   controllers: [ProductController], // Cambia el nombre del controlador a 'ProductController'
//   providers: [ProductService], // Cambia el nombre del servicio a 'ProductService'
// })
// export class ProductModule {} 