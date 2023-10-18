import { type SchemaTypeDefinition } from 'sanity' ; 
import project from './schemas/project-schema' ;
import blogPost from './schemas/blogPost';
import blockContent from './schemas/blockContent';
import author from './schemas/author';
import category from './schemas/category';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, blockContent, blogPost, author, category],
}
