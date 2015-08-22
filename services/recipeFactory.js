(function(){
    angular
        .module('bartenderApp')
        .factory('recipeFactory',recipeFactoryFunc);
    recipeFactoryFunc.$inject=[];

    function recipeFactoryFunc(){
        var recipeObj={};

        recipeObj.recipes =
            [
                {
                    "id":1,
                    "name":"Martini",
                    "numberOfDrinksMade":0,
                    "ingredients":[
                        {
                            "id":3,
                            "name":"Gin",
                            "qty":0.0591471,
                            "unit":"L",
                            "display":"2oz"
                        },
                        {
                            "id":6,
                            "name":"Dry Vermouth",
                            "qty":29.5735,
                            "unit":"ml",
                            "display":"1oz"
                        },
                        {
                            "id":12,
                            "name":"Olives",
                            "qty":1,
                            "display":"1"
                        }
                    ]
                },
                {
                    "id":2,
                    "name":"Margarita",
                    "numberOfDrinksMade":0,
                    "ingredients":[
                        {
                            "id":9,
                            "name":"Limes",
                            "qty":1,
                            "display":"1"
                        },
                        {
                            "id":4,
                            "name":"Tequila",
                            "qty":59.1471,
                            "unit":"ml",
                            "display":"2oz"
                        },
                        {
                            "id":13,
                            "name":"Orange Juice",
                            "qty":1,
                            "unit":"oz",
                            "display":"1oz"
                        },
                        {
                            "id":8,
                            "name":"Agave Nectar",
                            "qty":1,
                            "unit":"oz",
                            "display":"1oz"
                        }
                    ]
                },


                    {
                        "id":3,
                        "name":"Screw driver",
                        "numberOfDrinksMade":0,
                        "ingredients":[
                            {
                                "id":1,
                                "name":"Vodka",
                                "qty":59.1471,
                                "unit":"ml",
                                "display":"2oz"
                            },
                            {
                                "id":13,
                                "name":"Orange Juice",
                                "qty":4,
                                "unit":"oz",
                                "display":"4oz"
                            }
                        ]
                    },


                    {
                        "id":4,
                        "name":"Bloody Mary Mix",
                        "numberOfDrinksMade":0,
                        "ingredients":[
                            {
                                "id":1,
                                "name":"Vodka",
                                "qty":59.1471,
                                "unit":"ml",
                                "display":"2oz"
                            },
                            {
                                "id":7,
                                "name":"Bloody Mary Mix",
                                "qty":0.118294,
                                "unit":"L",
                                "display":"4oz"
                            },
                            {
                                "id":11,
                                "name":"Celery Stalk",
                                "qty":1,
                                "display":"1"
                            }
                        ]
                    },


                    {
                        "id":5,
                        "name":"Manhattan",
                        "numberOfDrinksMade":0,
                        "ingredients":[
                            {
                                "id":2,
                                "name":"Whiskey",
                                "qty":59.1471,
                                "unit":"ml",
                                "display":"2oz"
                            },
                            {
                                "id":5,
                                "name":"Sweet Vermouth",
                                "qty":29.5735,
                                "unit":"ml",
                                "display":"1oz"
                            },
                            {
                                "id":10,
                                "name":"Cherries",
                                "qty":1,
                                "display":"1"
                            }
                        ]
                    }

            ];

        recipeObj.getrecipes = function(){
            return recipeObj.recipes;
        }

        recipeObj.getRecipeById = function(id){

            for(var i = 0; i < recipeObj.recipes.length; i ++) {
                var recipeobject = recipeObj.recipes[i];
                console.log(recipeobject);

                if (recipeobject.id == id) {
                    console.log("in if");
                    return recipeobject;
                }

            }
        }


        recipeObj.updateDrink = function(updatedRecipeObject){
            for(var i =0; i < recipeObj.recipes.length; i ++){
                var oldRecipeObject = recipeObj.recipes[i];
                if(oldRecipeObject.id== updatedRecipeObject.id){
                    recipeObj.recipes[i] = updatedRecipeObject;
                }
            }

        }





        return recipeObj;

    }


})();

