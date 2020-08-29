import { onError } from '@apollo/client/link/error';
import { ServerError } from '@apollo/client';

const logoutLink = onError(({ networkError }) => {
  if ((networkError as ServerError).statusCode === 401) {
    // TODO: logout
  }
});

export default logoutLink;
