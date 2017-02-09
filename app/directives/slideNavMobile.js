angular.module("bcApp").directive("slideNavMobile", function($document){

  return {
    restrict: "E",
    templateUrl: "../views/shop-slide-nav.html",
    link: function(scope, elem, attr){
      // elem.hide();
      $(".bcs-hamburger-menu").on("click", function(e){
        e.stopPropagation();
        console.log("fired");
        elem.addClass("showme");
      })

      $(document).on("click", function(e){
        console.log("body clicked");
        elem.removeClass("showme");
      })


    }
  }

})
