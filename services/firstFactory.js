(function(){
    angular
        .module('bartenderApp')
        .factory('ingredientFactory',ingredientFactoryFunc);
    ingredientFactoryFunc.$inject=['recipeFactory'];

    function ingredientFactoryFunc(recipeFactory){
        var obj = {};

        obj.stock = [
          {
              "id":1,
              "name":"Vodka",
              "qty":750,
              "unit":"ml",
              "display": "750"+""+"ml"
          },
          {
              "id":2,
              "name":"Whiskey",
              "qty":750,
              "unit":"ml",
              "display": "750"+""+"ml"

          },
          {
              "id":3,
              "name":"Gin",
              "qty":1.5,
              "unit":"L",
              "display": "1.5"+""+"L"
          },
          {
              "id":4,
              "name":"Tequila",
              "qty":750,
              "unit":"ml",
              "display": "750"+ "" +"ml"
          },
          {
              "id":5,
              "name":"Sweet Vermouth",
              "qty":750,
              "unit":"ml",
              "display": "750"+ ""+"ml"
          },
          {
              "id":6,
              "name":"Dry Vermouth",
              "qty":750,
              "unit":"ml",
              "display": "750"+""+"ml"
          },
          {
              "id":7,
              "name":"Bloody Mary Mix",
              "qty":2,
              "unit":"L",
              "display": "2"+""+"L"
          },
            {
                "id":8,
                "name":"Agave Nectar",
                "qty":24,
                "unit":"oz",
                "display": "24"+""+"oz"
            },

            {
                "id":9,
                "name":"Limes",
                "qty":36,
                "display": 36

            },
            {
                "id":10,
                "name":"Cherries",
                "qty":9,
                "display": 9

            },
            {
                "id":11,
                "name":"Celery Stalk",
                "qty":16,
                "display": 16
            },
            {
                "id":12,
                "name":"Olives",
                "qty":24,
                "display": 24

            },
            {
                "id":13,
                "name":"Orange Juice",
                "qty":48,
                "unit":"oz",
                "display": 48
            }

      ];

        obj.getstock = function(){
            return obj.stock;
        }

        obj.getStockByID = function(id){
            for(var i=0;i < obj.stock.length; i ++){
                var stockObject = obj.stock[i];
                if(stockObject.id == id){
                    return stockObject;
                }
            }
        }

        obj.updateStockObject = function(newObj){
            for(var i=0; i <obj.stock.length; i ++){
                var stockObject= obj.stock[i];
                if(stockObject.id == newObj.id){
                    obj.stock[i]= newObj;
                }
            }

        }

        return obj;

    }


})();
