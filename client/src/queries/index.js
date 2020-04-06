import { gql } from 'apollo-boost'


/* Recipes Queries" */

export const GET_ALL_RECIPES = gql`
    query{
        getAllrecipes{
          name
          description
          instructions
          category 
          likes
          createdDate
        }
    }
`


/* Recipes Queries" */


/* User Queries" */


/* Recipes Queries" */

export const SIGNUP_USER = gql`
mutation($username: String!, $email: String!, $password: String!){
    signupUser(username: $username, email:$email , password:$password){
        token
    }
}
`;