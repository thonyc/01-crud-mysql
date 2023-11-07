import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Pool } from 'pg'; // Importa el módulo 'pg' para PostgreSQL

@Injectable()
export class ProductService {
  private pool: Pool;

  constructor() {
    // Configura la conexión a tu base de datos PostgreSQL
    this.pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'ProductCatalogDB',
      password: 'deadnote',
      port: 5432, // El puerto predeterminado de PostgreSQL
    });
  }

  async create(createProductDto: any): Promise<any> {
    try {
      const { product_name, description, price } = createProductDto;

      // Realiza una inserción en la base de datos
      const result = await this.pool.query(
        'INSERT INTO products (product_name, description, price) VALUES ($1, $2, $3) RETURNING *',
        [product_name, description, price]
      );

      return result.rows[0];
    } catch (error) {
      throw new InternalServerErrorException('Error al crear un producto');
    }
  }

  async findAll(): Promise<any[]> {
    const result = await this.pool.query('SELECT * FROM products');
    return result.rows;
  }

  async findOne(product_id: number): Promise<any> {
    const result = await this.pool.query('SELECT * FROM products WHERE product_id = $1', [product_id]);

    if (result.rowCount === 0) {
      throw new NotFoundException(`Product with ID ${product_id} not found`);
    }

    return result.rows[0];
  }

  async update(product_id: number, updateProductDto: any): Promise<any> {
    try {
      const { product_name, description, price } = updateProductDto;

      // Realiza una actualización en la base de datos
      const result = await this.pool.query(
        'UPDATE products SET product_name = $1, description = $2, price = $3 WHERE product_id = $4 RETURNING *',
        [product_name, description, price, product_id]
      );

      if (result.rowCount === 0) {
        throw new NotFoundException(`Product with ID ${product_id} not found`);
      }

      return result.rows[0];
    } catch (error) {
      throw new InternalServerErrorException('Error al actualizar el producto');
    }
  }

  async remove(product_id: number): Promise<void> {
    const result = await this.pool.query('DELETE FROM products WHERE product_id = $1', [product_id]);

    if (result.rowCount === 0) {
      throw new NotFoundException(`Product with ID ${product_id} not found`);
    }
  }
}
