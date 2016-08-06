var app = angular.module('WePerformApp', []);

app.controller('subscribeController', function($scope, $http, $window){

  $scope.doSubscribe = function(){
    console.log('Inscription');

    $http
      .post('/users/subscribe', { username: $scope.username })
      .success(function(result){
        $scope.username = '';
        if (result.redirect){
          $window.location.href = result.redirect;
        }
      });
  };

});