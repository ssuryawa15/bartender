(function(){
   angular
       .module('bartenderApp',['ngRoute'])
       .config(bartenderAppConfig);
    bartenderAppConfig.$inject = ['$routeProvider'];

    function bartenderAppConfig($routeProvider){
        $routeProvider
            .when('/menu',{
                templateUrl: '/bartender/templates/menu-template.html',
                controller: 'MenuCtrl',
                controllerAs: 'menuScope'
            })
            .when ('/summary',{
            templateUrl: '/bartender/templates/summary-template.html',
            controller: 'SummaryCtrl',
            controllerAs: 'summaryScope'
        })

            .otherwise({
                redirectTo: '/menu'
            });
    }




})();


