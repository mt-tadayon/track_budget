import { resolvers } from './resolver/resolver';
import { categoryRoute } from './routes/category-route';
import { ApolloServer } from 'apollo-server-hapi';
import { typeDefs } from './graphql/book.gql';
import * as Hapi from 'hapi';
import { Mongoose } from 'mongoose';

async function startServer() {

    connectMongoose();

    const server = new ApolloServer({ typeDefs, resolvers })

    const app = new Hapi.Server({
        host: 'localhost',
        port: 4000
    })

    app.route(categoryRoute)

    await server.applyMiddleware({
        app
    })

    await server.installSubscriptionHandlers(app.listener);

    await app.start().then(() => console.log(`Server is started on ${app.info.uri}`));
}

function connectMongoose() {
    const MONGODB_CONNECTION: string = "mongodb://localhost:27017/admin";
    const mongoose: Mongoose = new Mongoose();

    // Connect to mongoose
    mongoose.connect(MONGODB_CONNECTION, { useNewUrlParser: true });

    mongoose.connection.once('open', () => {
        console.log("Connected to Database");
    })
}

startServer().catch(error => console.log(error));