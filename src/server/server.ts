import { bookRoutes } from './routes/book-route';
import { resolvers } from './resolver/book_resolver';
import { ApolloServer } from 'apollo-server-hapi';
import { typeDefs } from './graphql/book.gql';
import * as Hapi from 'hapi';

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers })

    const app = new Hapi.Server({
        host: 'localhost',
        port: 4000
    })

    app.route(bookRoutes)

    await server.applyMiddleware({
        app
    })

    await server.installSubscriptionHandlers(app.listener);

    await app.start().then(() => console.log(`Server is started on ${app.info.uri}`));
}

startServer().catch(error => console.log(error));