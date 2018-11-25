import { authors } from './../model/author';
import { books } from './../model/book';
// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
export const resolvers = {
    Query: {
        books: () => books,
        authors: () => authors,
    },
};