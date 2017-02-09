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

angular.module("bcApp").service("mainService", function () {});
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

angular.module("bcApp").directive("slideNavMobile", function ($document) {

  return {
    restrict: "E",
    templateUrl: "../views/shop-slide-nav.html",
    link: function link(scope, elem, attr) {
      // elem.hide();
      $(".bcs-hamburger-menu").on("click", function (e) {
        e.stopPropagation();
        console.log("fired");
        elem.addClass("showme");
      });

      $(document).on("click", function (e) {
        console.log("body clicked");
        elem.removeClass("showme");
      });
    }
  };
});
//# sourceMappingURL=bundle.js.map
