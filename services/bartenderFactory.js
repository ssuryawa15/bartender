(function(){
    angular
        .module('bartenderApp')
        .factory('bartenderFactory',bartenderFactoryFunc);
    bartenderFactoryFunc.$inject = ['ingredientFactory','recipeFactory'];

    function bartenderFactoryFunc(ingredientFactory,recipeFactory){
        var bar = {};



        bar.makeDrink = function(id){
            var drinkRecipe = recipeFactory.getRecipeById(id);
            console.log(drinkRecipe);
            var canDrinkbeMade = true;

            for(var i=0; i <drinkRecipe.ingredients.length; i++){
                var recipeIngredient = drinkRecipe.ingredients[i];
                var ingredientFromStock = ingredientFactory.getStockByID(recipeIngredient.id);
                console.log("ingredient from stock");
                console.log(ingredientFromStock);
                if(ingredientFromStock.qty < recipeIngredient.qty){
                    canDrinkbeMade = false;
                }
            }
            if(canDrinkbeMade)
            {
                bar.fixDrink(id);
                drinkRecipe.numberOfDrinksMade = drinkRecipe.numberOfDrinksMade+1;
                recipeFactory.updateDrink(drinkRecipe);
                return true;
            }
            else
            {
                return false;
            }



        }

            bar.fixDrink =function(id)
            {
                var drinkRecipe = recipeFactory.getRecipeById(id);

                for(var i=0; i <drinkRecipe.ingredients.length; i++) {
                    var recipeIngredient = drinkRecipe.ingredients[i];
                    var ingredientFromStock = ingredientFactory.getStockByID(recipeIngredient.id);
                    ingredientFromStock.qty = ingredientFromStock.qty - recipeIngredient.qty;
                    ingredientFactory.updateStockObject(ingredientFromStock);
                    console.log(ingredientFromStock);

                }

            }

        bar.cancelOrderOfTheDrink = function(id){
            var recipe = recipeFactory.getRecipeById(id);
            if(recipe.numberOfDrinksMade >0){

                for(var i=0; i<recipe.ingredients.length; i++)
                {
                    var recipeIngredient = recipe.ingredients[i];
                    console.log(recipeIngredient);

                    var ingredientFromStock = ingredientFactory.getStockByID(recipeIngredient.id);
                    console.log("hello");


                    ingredientFromStock.qty = ingredientFromStock.qty + recipeIngredient.qty;

                    ingredientFactory.updateStockObject(ingredientFromStock);
                    console.log(ingredientFromStock);


                }
                recipe.numberOfDrinksMade = recipe.numberOfDrinksMade - 1;
                recipeFactory.updateDrink(recipe);
                return true;

            }
            else{
                return false;
            }


        }




        return bar;
    }

})();
