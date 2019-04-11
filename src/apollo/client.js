import "cross-fetch/polyfill"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloClient } from "apollo-client"
import { createUploadLink } from "apollo-upload-client"

export const client = new ApolloClient({
  ssrMode: typeof window !== "undefined",
  cache: new InMemoryCache(),
  link: createUploadLink({ uri: "http://localhost:3001/graphql" }),
})
