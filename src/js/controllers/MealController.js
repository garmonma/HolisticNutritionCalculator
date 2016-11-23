/**
 * Created by magma on 9/5/2016.
 */
var FoodItem = function (obj) {
    var self = this;

    if (!obj) {
        self.name = null;
        self.servingSizeList = null;
        self.servingSize = null;
        self.servings = null;

    } else {
        self = obj;
    }

    return self;
};

var ServingSize = function(obj){
    var self = this;

    if (!obj) {
        self.servingDescription = null;
        self.calories = null;
        self.fat = null;
        self.carbohydrate = null;
        self.protein = null;
        self.saturatedFat = null;
        self.polyunsaturatedFat = null;
        self.monounsaturatedFat = null;
        self.transFat = null;
        self.cholesterol = null;
        self.sodium = null;
        self.potassium = null;
        self.fiber = null;
        self.sugar = null;
        self.vitaminA = null;
        self.vitaminC = null;
        self.vitaminD = null;
        self.vitaminE = null;
        self.calcium = null;
        self.iron = null;
    } else {
        self = obj;
    }

    return self;

};

angular.module('MealController', [])
    .controller('MealCtrl', function($scope, $http) {

    console.log("Meal Controller reporting for duty.");

        $scope.search = function () {
            $http({
                method: 'GET',
                url: 'http://localhost:8080/foodEntity/foodList?query=' + $scope.searchString
            }).then(function successCallback(response) {
                $scope.searchedList = response.data;
            }, function errorCallback(response) {
                console.log(response);
            });

            $scope.searchString = "";
        };

        var foodIdList = [];
        $scope.appendSelectedItems = function(id){
            foodIdList.push(id);
        };

        $scope.foodItemList = [];

        $scope.addItems = function(){
            $http({
                method: 'GET',
                url: 'http://localhost:8080/foodEntity/foods?ids=' + foodIdList
            }).then(function successCallback(response) {

                for(var i = 0; i < response.data.length; i++){
                    var fi = new FoodItem();
                    fi.name = response.data["0"].name;
                    fi.servingSizeList = response.data["0"].servings;
                    fi.servingSize = new ServingSize(response.data["0"].servings["0"]);
                    fi.servings = 1;

                    $scope.foodItemList.push(fi);
                }

                foodIdList.length = 0;

            }, function errorCallback(response) {
                console.log(response);
            });
        };

        $scope.subItem = function (index) {
            console.log("popping index " + index);
            $scope.foodItemList.pop(index);
        };

        $scope.updateServingSize = function(index, newServingSize){
            $scope.foodItemList[index].servingSize = newServingSize;
        };

        $scope.updateServings = function(index, newServings){
            $scope.foodItemList[index].servings = newServings;
        };
});
