import { authors } from "./author";

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
export const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: authors[0],
        selected: true
    },
    {
        title: 'Jurassic Park',
        author: authors[1],
        selected: false
    },
];