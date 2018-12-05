/**
 * Export a string which contains our GraphQL type definitions.
 */
export const categoryTypeDefs = `
  type Category {
    _id: ID!
    name: String!
  }
  input CategoryFilterInput {
    limit: Int
  }

  # Extending the root Query type.
  extend type Query {
    categories(filter: CategoryFilterInput): [Category]
    category(_id: String!): Category
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
    editCategory(_id: String!, input: CategoryInput!): Category
    deleteCategory(_id: String!): Category
  }
`;