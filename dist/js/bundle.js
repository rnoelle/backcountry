"use strict";

angular.module("bcApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state("home", {
    url: "/",
    templateUrl: "./views/bc-corp.html",
    controller: "mainController"
  }).state("shop", {
    url: "/shop",
    templateUrl: "./views/shop-home.html"
  });

  $urlRouterProvider.otherwise("/");
});
"use strict";

angular.module("bcApp").controller('mainController', function ($scope, mainService) {

  $scope.hi = "WELCOME MUAHAHAH";
});
"use strict";

angular.module("bcApp").service("mainService", function () {});
//# sourceMappingURL=bundle.js.map
