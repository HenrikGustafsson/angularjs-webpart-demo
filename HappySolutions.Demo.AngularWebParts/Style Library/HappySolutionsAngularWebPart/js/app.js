'use strict';
var app = angular.module('HappySolutionsAngularWebPartDemo', [])
app.controller('MainCtrl', [
'$scope',
function ($scope) {
    $scope.happyclicked = function (event) {
        event.preventDefault();
        if ($scope.message === 'happy') {
            $scope.successMessage = 'Congrats! You know the secret of life - Happy is good!';
        } else {
            $scope.successMessage = 'Access to the secret of life is denied... input the correct password';
        }

    };
}]);