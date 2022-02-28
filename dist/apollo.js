"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialiseApolloServer = void 0;
var apollo_server_express_1 = require("apollo-server-express");
var apollo_server_core_1 = require("apollo-server-core");
var express_1 = require("./express");
//schema
var schema_1 = require("./schema");
var initialiseApolloServer = function () {
    var apolloServer = new apollo_server_express_1.ApolloServer({
        schema: schema_1.schema,
        plugins: [apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground],
    });
    apolloServer
        .start()
        .then(function () {
        apolloServer.applyMiddleware({ app: express_1.expressApp });
        var PORT = process.env.PORT || 4000;
        express_1.httpServer.listen(PORT, function () {
            console.log("server started at port: ", PORT);
        });
    })
        .catch(function (err) {
        console.log(err);
    });
};
exports.initialiseApolloServer = initialiseApolloServer;
