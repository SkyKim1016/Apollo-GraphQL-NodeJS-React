exports.resolvers = {
    Query:{
        getAllrecipes : async (root, args, {Recipe} ) => {
            const allRecipes = await Recipe.find();
            return allRecipes;
        }
    },
    Mutation:{  
        addRecipe: async( //(root or parent, args or {},  context  )
            root,
            { name, description, category, instructions, username }, 
            { Recipe }
        ) => {
            const newRecipe = await new Recipe({
                name,
                description,
                category,
                instructions,
                username
            }).save();
            return newRecipe;
        }
    }
};
