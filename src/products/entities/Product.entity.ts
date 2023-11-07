
 import { Entity,PrimaryGeneratedColumn, Column,  } from "typeorm";

 @Entity('products')
export class Product {

    @PrimaryGeneratedColumn('identity')
     product_id: number=0;

    @Column({ type: 'varchar', length: 255, nullable: false })
    product_name: string='';
    
    @Column({ type: 'text', nullable: false }) // Asegúrate de agregar "nullable: false" aquí
     description: string = '';

    @Column({ type: 'decimal', nullable: false }) // Asegúrate de agregar "nullable: false" aquí
     price: number = 0;

      
    }