import { gql } from 'apollo-boost'


/* Recipes Queries" */

export const GET_ALL_RECIPES = gql`
    query{
        getAllrecipes{
          _id
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

export const GET_RECIPE = gql`
    query($_id: ID!){
        getRecipe(_id: $_id){
            _id
            name
            username
            category
            description
            instructions
            createdDate
            likes
            username
        }
    }
`;

export const SEARCH_RECIPES = gql`
  query($searchTerm: String) {
    searchRecipes(searchTerm: $searchTerm) {
      _id
      name
      likes
    }
  }
`;

/* Recipes Mutations */

export const ADD_RECIPE = gql`
    mutation($name: String!, $description: String!, $category: String!, $instructions: String!, $username: String)
    {
        addRecipe(
            name: $name, description : $description, category: $category, instructions: $instructions , username: $username 
        )
        {
            _id
            name
            username
            category
            description
            instructions
            createdDate
            likes
        }
    }

`;

/* User Queries" */
export const GET_CURRENT_USER = gql`
    query{
        getCurrentUser{
            username
            joinDate
            email
        }
    }
`

/* User Mutations" */

export const SIGNIN_USER = gql`
    mutation($username: String!, $password: String! ){
        signinUser(username: $username, password: $password){
            token
        }
    }
`;


/* Recipes Queries" */

export const SIGNUP_USER = gql`
mutation($username: String!, $email: String!, $password: String!){
    signupUser(username: $username, email:$email , password:$password){
        token
    }
}
`;