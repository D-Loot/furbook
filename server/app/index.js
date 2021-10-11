const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const db = require('./config/connection');

const app = express();

const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  // TODO: Add context using token service.
});

server
  .start()
  .then(() => {
    server.applyMiddleware({ app });

    httpServer.listen({ port: 4000 }, () => {
      console.info(
        `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
      );
    });
  })
  .catch((error) => {
    console.error("Error starting server: ", error);
  });

dbClient.connect();

process.on("SIGINT", () => {
  dbClient.close();
});
