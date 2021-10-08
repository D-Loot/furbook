import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from "http";
import dbClient from "./db/client.js";
import { resolvers, typeDefs } from "./graphql/index.js";

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
