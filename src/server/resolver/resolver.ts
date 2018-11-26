import { Category } from './../model/category';

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
export const resolvers = {
    Query: {
        categories: () => Category.find(),
    },
};