import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    year: String
  }
  type Query {
    movies: [Movie]
  }
`

const movies = [
  { id: 1, title: 'The Counte of Monte Cristo', year: 2005 },
  { id: 2, title: 'Sherlock Holmes', year: 2050 },
  { id: 3, title: 'Hunt for Red October', year: 1997 },
  { id: 4, title: 'Lords of Dogtown', year: 2006 }
]

const resolvers = {
  Query: {
    movies: () => movies
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`Server listening on: ${url}`)
})
