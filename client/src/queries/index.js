import { gql } from 'apollo-boost'

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