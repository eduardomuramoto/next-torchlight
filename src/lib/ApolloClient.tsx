
import { ApolloClient, InMemoryCache } from "@apollo/client";

// Combine the authLink and httpLink
const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_CMS_GRAPHQL}`,
  cache: new InMemoryCache(),
  credentials: 'include'
});

export default client;
