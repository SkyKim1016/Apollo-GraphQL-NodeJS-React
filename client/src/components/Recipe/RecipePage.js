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
                    <h2> {data.getRecipe.name} </h2>
                    <p> {data.getRecipe.category} </p>
                    <p> {data.getRecipe.descriptiom} </p>
                    <p> {data.getRecipe.instructions} </p>
                    <p> {data.getRecipe.likes} </p>
                    <p> {data.getRecipe.username} </p>
                    <button>Like</button>
                </div>
                
            }}
        </Query>
    );
}

export default withRouter(RecipePage);