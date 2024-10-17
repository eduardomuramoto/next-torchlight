import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Create an http link to connect to your GraphQL endpoint
const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_CMS_GRAPHQL}`, // Ensure this environment variable is defined
});

// Set up a context link to add headers
const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage or any other storage
  const token = `${process.env.STRAPI_TOKEN}`; // Adjust this as needed for your auth method

  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '', // Set the authorization header
    },
  };
});

// Combine the authLink and httpLink
const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
