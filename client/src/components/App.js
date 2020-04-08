import React from 'react';
import './App.css';

import { Query} from 'react-apollo';
import { GET_ALL_RECIPES } from '../queries';
import RecipeItem from './Recipe/RecipeItem';



const App = () => (
  <div className="App">
      <h1> RS Company</h1>

      <Query query={GET_ALL_RECIPES}>
          { ({data, loading, error}) => {
              if(loading) return <div> loading</div>
              if(error) return <div> Error </div>
              console.log(data);
              return( 
                <ul>
                   {data.getAllrecipes.map(recipe => 
                    <RecipeItem key={recipe._id} {...recipe} />
                  )}
                </ul>
            )
          }}
      </Query>

  </div>
)

export default App;
