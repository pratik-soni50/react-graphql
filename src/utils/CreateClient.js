import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache, defaultDataIdFromObject } from "apollo-cache-inmemory";
import { ApolloLink, from } from 'apollo-link';

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authentication: localStorage.getItem('token') || null,
    }
  }));
  return forward(operation);
});


export default new ApolloClient({
  cache: new InMemoryCache({
    dataIdFromObject: object => defaultDataIdFromObject(object),
  }),
  link: from([
    authMiddleware,
    httpLink
  ]),
});
