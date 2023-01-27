(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', ['$scope', LunchCheckController]);
  function LunchCheckController($scope) {
    $scope.list = "";
    $scope.result = "";
    $scope.Modifcolor = "";
    $scope.Modif = function (){
      if ($scope.result == "Enjoy!" || $scope.result == "Too much!") {
        $scope.Modifcolor = "green";
      } else if($scope.result ="Please enter data first"){
        $scope.Modifcolor = "red";
      }
    };
    $scope.CheckList = function() {
      var CountComma = 0;
      const chars = $scope.list.split('');
      if (chars != "") {
        var lastCheck = false;
        for(var i = 0; i < chars.length ; i++) {
          if(chars[i] == "," || chars[i] == " " ) {
            if(lastCheck == false) {
              CountComma += 1;
              lastCheck = true;
            }
          } else {
            lastCheck = false;
          }
        }
        if(CountComma <= 3) {
          $scope.result = "Enjoy!";
        } else if (CountComma > 3) {
          $scope.result = "Too much!";
        }
      } else {
        $scope.result ="Please enter data first";
      }
      $scope.Modif()
    };
  };
})();
