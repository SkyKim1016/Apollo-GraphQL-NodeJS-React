const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const jwt = require('jsonwebtoken');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');
require('dotenv').config({path:'variables.env'});
const Recipe = require("./models/Recipe");
const User = require("./models/User");

// const Recipe = require('./models/Recipes');
// const User = require('./models/User')

// Bring in GraphQL-Express 
// const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { ApolloServer, graphqlExpress } = require('apollo-server-express');

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: {
        Recipe,
        User,
       
    }
 });
// const { makeExecutableSchema} = require('graphql-tools');


// const schema = makeExecutableSchema({
//     typeDefs,
//     resolvers
// });



mongoose
    .connect(process.env.MONGO_URI, {useNewUrlParser:true})
    .then(() => console.log('DB connected'))
    .catch( err => console.error(err));
mongoose.set('useCreateIndex')

const app = express();

const corsOptions = {
    origin : 'http://localhost:3000',
    credentials:true
}

app.use(
    // bodyParser.json(),
    cors(corsOptions)    
);


//Set up JWT authentication
app.use(async(req,res, next) => {
    const token = req.headers['authorization'];
    console.log("### Token : "+token, typeof token);
    if(token !== "null"){
        try{
            const currentUser = await jwt.verify(token, process.env.SECRET )
            // console.log(currentUser)
            req.currentUser = currentUser;
        }catch(err) {
            console.error(err);
        }
    }
    next(); 
});


server.applyMiddleware({ app });

// // Create GraphiQL application
// app.use('/graphiql', graphiqlExpress({ 
//     endpointURL : '/graphql'
// }))

// //Connect schema with GraphQL
// app.use ('/graphql', graphqlExpress({
//     schema,
//     context:{
//         Recipe,
//         User,
//     }
// })
// )

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT }`)
})