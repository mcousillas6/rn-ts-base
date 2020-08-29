import { ApolloLink } from '@apollo/client';
import localStorage from 'utils/localStorage';

// TODO: actually implement this
const authLink = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: localStorage.getItem('token') || null,
    },
  });

  return forward(operation);
});

export default authLink;
