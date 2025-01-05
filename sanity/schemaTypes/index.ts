import { type SchemaTypeDefinition } from 'sanity'
import { authors } from './authors'
import { categories } from './categories'
import { projects } from './projects'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authors, categories, projects],
}
