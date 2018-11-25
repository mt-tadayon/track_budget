import { ApolloServer, gql } from 'apollo-server-hapi';
import * as Hapi from 'hapi';

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
    Query: {
        books: () => books,
    },
};

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers })

    const app = new Hapi.Server({
        host: 'localhost',
        port: 4000
    })

    await server.applyMiddleware({
        app
    })

    await server.installSubscriptionHandlers(app.listener);

    await app.start().then(() => console.log(`Server is started on app.info.uri`));
}

startServer().catch(error => console.log(error));