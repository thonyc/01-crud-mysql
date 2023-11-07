import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
//import { ProductController } from './products/product.controller';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ProductModule } from './products/product.module';




@Module({
  imports: [
   
    
    ProductModule,
    TypeOrmModule.forRoot({
      type:'postgres',
      host : 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'deadnote',
      database: 'ProductCatalogDB',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize:false,

  
    })
  ],
  controllers: [AppController],
  providers : [AppService],
 
})
export class AppModule{}
 