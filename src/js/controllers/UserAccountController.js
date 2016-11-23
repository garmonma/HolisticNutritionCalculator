/**
 * Created by magma on 9/5/2016.
 */
angular.module('UserAccountController', [])
    .controller('UserAccountCtrl', function($scope, $location, $http) {

    console.log("User Account Controller reporting for duty.");

    $http({
        method: 'GET',
        url: 'http://localhost:8081/holisticUser/getHolisticUser?usernameOrPassword=magarmon'
    }).then(function successCallback(response) {

        if(response.data.username){
            $scope.user = response.data;
            $location.path('/register');
        }

    }, function errorCallback(response) {
        console.log(response);
    });
});
