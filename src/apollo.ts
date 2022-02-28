import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  gql,
} from "apollo-server-core";

import { expressApp, httpServer } from "./express";

//schema
import { schema } from "./schema";

export const initialiseApolloServer = () => {
  const apolloServer = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });

  apolloServer
    .start()
    .then(() => {
      apolloServer.applyMiddleware({ app: expressApp });

      const PORT = process.env.PORT || 4000;

      httpServer.listen(PORT, () => {
        console.log("server started at port: ", PORT);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
