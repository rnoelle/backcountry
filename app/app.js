angular.module("bcApp", ['ui.router'])



.config(function ($stateProvider, $urlRouterProvider){

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/bc-corp.html",
      controller: "mainController"
    })

  $urlRouterProvider
    .otherwise("/")

})
