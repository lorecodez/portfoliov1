import { type SchemaTypeDefinition } from 'sanity' ; 
import project from './schemas/project-schema' ;
import blogPost from './schemas/blogPost';
import blockContent from './schemas/blockcontent';
import author from './schemas/Author';
import category from './schemas/category';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, blockContent, blogPost, author, category],
}
