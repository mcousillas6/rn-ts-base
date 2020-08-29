import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import authLink from './authLink';
import logoutLink from './logoutLink';
import introspectionResult from 'graphql/generated.d';

const link = authLink.concat(logoutLink).concat(
  createHttpLink({
    uri: 'localhost', // TODO  uri
  })
);

const client = new ApolloClient({
  cache: new InMemoryCache({
    possibleTypes: introspectionResult.possibleTypes,
  }),
  uri: 'localhost',
  link,
});

export default client;
