import Category from './category.model'

/**
 * Export a string which contains our GraphQL type definitions.
 */
export const categoryTypeDefs = `
  type Category {
    id: ID!
    name: String!
  }
  input CategoryFilterInput {
    limit: Int
  }
  # Extending the root Query type.
  extend type Query {
    categories(filter: CategoryFilterInput): [Category]
    category(id: String!): Category
  }

  # We do not need to check if any of the input parameters
  # exist with a "!" character. This is because mongoose will
  # do this for us, and it also means we can use the same
  # input on both the "addCategory" and "editCategory" methods.
  input CategoryInput {
    name: String
  }

  # Extending the root Mutation type.
  extend type Mutation {
    addCategory(input: CategoryInput!): Category
    editCategory(id: String!, input: CategoryInput!): Category
    deleteCategory(id: String!): Category
  }
`;

/**
 * Exporting our resolver functions. Note that:
 * 1. They can use async/await or return a Promise which
 *    Apollo will resolve for us.
 * 2. The resolver property names match exactly with the
 *    schema types.
 */
export const categoryResolvers = {
    Query: {
        categories: async (_: any, { filter = {} }) => {
            const categories: any[] = await Category.find({}, null, filter);
            // notice that I have ": any[]" after the "categories" variable?
            // That is because I am using TypeScript but you can remove
            // this and it will work normally with pure JavaScript
            return categories.map(category => category.toGraph());
        },
        category: async (_: any, { id }: any) => {
            const category: any = await Category.findById(id);
            return category.toGraph();
        },
    },
    Mutation: {
        addCategory: async (_: any, { input }: any) => {
            const category: any = await Category.create(input);
            return category.toGraph();
        },
        editCategory: async (_: any, { id, input }: any) => {
            const category: any = await Category.findByIdAndUpdate(id, input);
            return category.toGraph();
        },
        deleteCategory: async (_: any, { id }: any) => {
            const category: any = await Category.findByIdAndRemove(id);
            return category ? category.toGraph() : null;
        },
    },
};