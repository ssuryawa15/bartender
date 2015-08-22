(function(){
    angular
        .module('bartenderApp')
        .controller('MenuCtrl',MenuCtrlFunc);

    MenuCtrlFunc.$inject = ['bartenderFactory','ingredientFactory','recipeFactory','$location'];
    function MenuCtrlFunc(bartenderFactory,ingredientFactory,recipeFactory,$location){
        var menuScope = this;

        function loadStock(){
            menuScope.stock = ingredientFactory.getstock();
            console.log(menuScope.stock);

        };
         loadStock();


        (function(){
            menuScope.recipes = recipeFactory.getrecipes();
            console.log(menuScope.recipes);
        })();


        menuScope.getdrink = function(id){
            console.log("id passed is ");
            console.log(id);
            var wasDrinkMade = true;

            wasDrinkMade = bartenderFactory.makeDrink(id);
            if(!wasDrinkMade){
                alert("drink was not made");
            }
            loadStock();
        }

        menuScope.canceldrink = function(id){
            var wasDrinkcancelled = true;

            wasDrinkcancelled = bartenderFactory.cancelOrderOfTheDrink(id);
            if(!wasDrinkcancelled){
                alert("cannot cancel zero drinks");

            }
            loadStock();
        }
        menuScope.placeOrder= function(){
            $location.path("/summary");
        }




    }
})();
