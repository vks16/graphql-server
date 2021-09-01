const { ApolloServer } = require('apollo-server');
const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { getUserId } = require('./utils');

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require("./resolvers/User");

const resolvers = {
    Query,
    Mutation,
    User
}

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
    context: ({ req }) => {
        return {
            ...req,
            prisma,
            userId:
                req && req.headers.authorization
                    ? getUserId(req)
                    : null
        };
    }
});

server
    .listen()
    .then(({url}) => console.log(`server is running on ${url}`))