import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import { MongoClient } from "mongodb";
import { queryResolvers, mutationResolvers } from "./resolvers.js";
import { Quiz, User, Icon } from "./__generated__/resolvers-types.js";
import * as dotenv from "dotenv";
dotenv.config();
const { MONGODB_CLUSTER, MONGODB_USERNAME, MONGODB_PASSWORD } = process.env ?? {};

const typeDefs = readFileSync("./graphql/schema.graphql", { encoding: "utf-8" });

const mongoDBConnectionString = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}`;
export const database = new MongoClient(mongoDBConnectionString);
await database.connect();

const Users = database.db("live").collection<User>("users");
const Icons = database.db("live").collection<Icon>("icons");
const Quizzes = database.db("live").collection<Quiz>("quizzes");

export const dataSources = { Users, Icons, Quizzes };

const server = new ApolloServer({
   typeDefs,
   resolvers: { Mutation: mutationResolvers, Query: queryResolvers },
});

const { url } = await startStandaloneServer(server, {
   context: async ({ req }) => ({
      dataSources,
   }),
   listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
