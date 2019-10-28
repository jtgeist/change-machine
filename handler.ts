import { ApolloServer, gql } from 'apollo-server-lambda';
import lambdaPlayground from 'graphql-playground-middleware-lambda';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query : {
    hello: () => 'Hello world!',
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.graphqlHandler = server.createHandler();

exports.playgroundHandler = lambdaPlayground({});