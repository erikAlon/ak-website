const { GraphQLServer } = require("graphql-yoga")
const fetch = require("node-fetch")

const Query = require("./resolvers/Query")

const resolvers = {
  Query,
}

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
})

server.start(() =>
  console.log(
    `AK webapp twitter graphql server running on http://localhost:${
      process.env.PORT
    }`
  )
)
