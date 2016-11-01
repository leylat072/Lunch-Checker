(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {


  $scope.checkNumber = function () {
    if($scope.Mystrings == undefined)
    {
    $scope.MyMessage =  "Please enter data first";
    return;
    }
    var _split = $scope.Mystrings.split(",");

    if(_split.length <= 3)
    {
$scope.MyMessage ="Enjoy!";
    }
    else {
$scope.MyMessage ="Too much!";
    }

  };
}

})();
