(function(){
    angular
        .module('bartenderApp')
        .controller('SummaryCtrl',SummaryCtrlFunc);

    SummaryCtrlFunc.$inject = ['bartenderFactory','ingredientFactory','recipeFactory',];
    function SummaryCtrlFunc(bartenderFactory,ingredientFactory,recipeFactory){
        var summaryScope = this;

        summaryScope.listOfRecipes = recipeFactory.getrecipes();
summaryScope.total = calculateTotal();

       function calculateTotal(){
           var total = 0;
           for(var i =0; i < summaryScope.listOfRecipes.length; i++){
               total = total + summaryScope.listOfRecipes[i].numberOfDrinksMade;

           }


           return total;

       }



    }
})();

