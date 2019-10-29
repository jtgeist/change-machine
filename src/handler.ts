import { ApolloServer } from 'apollo-server-lambda';
import typeDefs from './schema.graphql';
import resolvers from './resolvers'

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.graphqlHandler = server.createHandler();