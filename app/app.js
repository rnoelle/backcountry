angular.module("bcApp", ['ui.router'])



.config(function ($stateProvider, $urlRouterProvider){

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/bc-corp.html",
      controller: "mainController"
    })
    .state("shop", {
      url: "/shop",
      templateUrl: "./views/shop-home.html",
      // controller: "shopController"
    })

  $urlRouterProvider
    .otherwise("/")

})
