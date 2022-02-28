import { loadFilesSync } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "graphql-tools";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);

const typeDefs = mergeTypeDefs(loadedTypes);

const resolversArray = loadFilesSync(`${__dirname}/**/*.resolvers.js`);
const resolvers = mergeResolvers(resolversArray);

export const schema = makeExecutableSchema({ typeDefs, resolvers });
