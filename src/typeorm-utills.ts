// //import 'reflect-metadata';
// import { EntityMetadata, getMetadataArgsStorage } from 'typeorm';
// import { Product } from './products/entities/Product.entity';


// type EntityFunction = new () => Product;

// export function getEntityMetadata(entity: EntityFunction): EntityMetadata | undefined {
//   const metadata = getMetadataArgsStorage().filterColumns(entity).find((metadata) => metadata.target === entity);
//   return metadata;
// }
