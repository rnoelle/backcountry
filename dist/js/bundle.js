"use strict";

angular.module("bcApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state("home", {
    url: "/",
    templateUrl: "./views/bc-corp.html",
    controller: "mainController"
  }).state("shop", {
    url: "/shop",
    templateUrl: "./views/shop-homepage.html"
  });

  $urlRouterProvider.otherwise("/");
});
"use strict";

angular.module("bcApp").controller('mainController', function ($scope, mainService) {

  $scope.hi = "WELCOME MUAHAHAH";
});
"use strict";

angular.module("bcApp").directive("scrollNav", function () {

  return {
    restrict: "E",
    templateUrl: "../views/shop-scroll-nav.html",
    link: function link(scope, elem, attr) {

      //sliding goes here


    }
  };
});
"use strict";

angular.module("bcApp").service("mainService", function () {});
//# sourceMappingURL=bundle.js.map
