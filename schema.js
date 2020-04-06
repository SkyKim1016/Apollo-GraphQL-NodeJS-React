const { gql } = require('apollo-server-express');
 
exports.typeDefs = gql`
  type Query {
    recipes: [Recipe]!
    users: [User]!
    getAllrecipes:[Recipe]!
  }

  type Mutation {
    addRecipe(name: String!, description: String!, category: String!, instructions: String! ): Recipe
  }
 
  type Recipe{
    _id: ID
    name: String!
    category: String!
    description: String!
    instructions: String!
    createdDate: String
    likes: Int
    username: String
  }
 
  type User{
    _id:ID
    username: String!
    password: String!
    email: String!
    joinDate: String
    favorites: [Recipe]
  }

`;