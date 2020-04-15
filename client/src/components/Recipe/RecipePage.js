import React from 'react';

import { withRouter } from 'react-router-dom';

import { Query } from 'react-apollo';
import { GET_RECIPE } from "../../queries"
import { json } from 'body-parser';

// import Spinner from "../Spinner";

const RecipePage = ({ match }) => {
    const { _id } = match.params;
    // const id = json.toString(_id);
    // console.log("_id : " + _id );
    // console.log("GET_RECIPE : "+ JSON.stringify(GET_RECIPE) )
    
    return(    
        <Query query={GET_RECIPE} variables={{ _id }}>
            {({data, loading, error}) => {
                if(loading) return <div> Loading </div>
                if(error) return <div> Error </div>
                console.log(data);
                return <div align="center"> 
                    <h2> Recipe Name : {data.getRecipe.name} </h2> 
                    <p> Category : {data.getRecipe.category} </p>
                    <p> Description : {data.getRecipe.description} </p>
                    <p> Instructions : {data.getRecipe.instructions} </p>
                    <p> Likes : {data.getRecipe.likes} </p>
                    <p> Username : {data.getRecipe.username} </p>
                    <button>Like</button>
                </div>
                
            }}
        </Query>
    );
}

export default withRouter(RecipePage);