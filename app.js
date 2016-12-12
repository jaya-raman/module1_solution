(function () {
 'use strict';
  angular.module('LunchCheck', [])

  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.name = "";
    $scope.msg = "";
    $scope.fontColor = "";
    $scope.getMsg = function () {
        var displayMsg = CheckLunchItems($scope.name);
        $scope.msg = displayMsg;
        //$scope.fontColor = "Red";
       };

    function CheckLunchItems(items) {
      var displayMessage ="";
      if(items != "")
      {
        var arrayOfItems = items.split(',');

        for(var i=0;i<arrayOfItems.length;i++) {
          if(arrayOfItems[i] == "")
             arrayOfItems.splice(i,1);
        }

        if((arrayOfItems.length >0) && (arrayOfItems.length <= 3))
        {
          displayMessage = "Enjoy!"
          $scope.fontColor = "Green";
        }
        else if(arrayOfItems.length > 3)
        {
          displayMessage = "Too Much!";
          $scope.fontColor = "Red";
        }
      }
      else {
        displayMessage = "Please enter the data first";
        $scope.fontColor = "Red";
      }
      return displayMessage;
    }
  }

})();
// (function () {
//   'use strict';
//
// var myApp = angular.module('MyFirstApp', []);
//   myApp.controller('FirstController', function ($scope){
//      $scope.msg = "Try";
//   });
// })();
