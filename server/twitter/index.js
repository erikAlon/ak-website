const { GraphQLServer } = require("graphql-yoga")

const Query = require("./resolvers/Query")

const resolvers = {
  Query,
}

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
})

server.start(() => console.log(`Server running on port: ${process.env.PORT}`))
