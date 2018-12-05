import "reflect-metadata";
import { travelResolvers, travelTypeDefs } from './common/travel/travel.schema';
import { expenseTypeDefs, expenseResolvers } from './common/expense/expense.schema';
import { categoryTypeDefs, categoryResolvers } from './common/category/category.schema';
import { ApolloServer } from 'apollo-server-hapi';
import { makeExecutableSchema } from 'graphql-tools';
import * as Hapi from 'hapi';
import * as mongoose from 'mongoose';
import { initFirebaseForApp } from "./config/firebase";

initFirebaseForApp();

mongoose.connect(
    "mongodb://localhost:27017/budget_tracker",
    { useNewUrlParser: true }
).then(
    () => { console.log(`🚀  Database is now connected`) }
)

// TODO: Define Date in graphQL
const rootTypeDefs = `
    scalar Date

    type Query
    type Mutation
    schema {
        query: Query
        mutation: Mutation
    }
`;

const schema = makeExecutableSchema({
    typeDefs: [
        rootTypeDefs,
        categoryTypeDefs,
        expenseTypeDefs,
        travelTypeDefs
    ],
    resolvers: [
        categoryResolvers,
        expenseResolvers,
        travelResolvers,
    ]
});


async function startServer() {
    const server = new ApolloServer({
        schema,
        formatError(error: Error) {
            if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
                // logging the errors can help in development
                console.log(error);
            }
            return error;
        },
    })

    const app = new Hapi.Server({
        host: 'localhost',
        port: 4000
    })

    app.route([]);

    await server.applyMiddleware({
        app
    })

    await server.installSubscriptionHandlers(app.listener);

    await app.start().then(() => console.log(`🚀  Server is started on ${app.info.uri}`));
}


startServer().catch(error => console.log(error));