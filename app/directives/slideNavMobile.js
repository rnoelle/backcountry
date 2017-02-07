angular.module("bcApp").directive("slideNavMobile", function($document){

  return {
    restrict: "E",
    templateUrl: "../views/shop-slide-nav.html",
    link: function(scope, elem, attr){
      // elem.hide();
      $(".bcs-hamburger-menu").on("click", function(){
        console.log("fired");
        elem.toggleClass("showme");

      })


    }
  }

})
