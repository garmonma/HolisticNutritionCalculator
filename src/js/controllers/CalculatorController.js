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

var NutritionLabel = function(obj){
    var self = this;

    if(!obj){
        self.description = null;
        self.foodItemName = null;
        self.calories = null;
        self.protein = null;
        self.carbohydrate = null;
        self.fat = null;
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
};

function buildFoodItemNutritionLabel(foodItem, foodItemNutritionLabel){
    var servingSize = foodItem.servingSize;

    foodItemNutritionLabel.foodItemName = foodItem.name;
    foodItemNutritionLabel.description = servingSize.servingDescription;
    foodItemNutritionLabel.calories = servingSize.calories;
    foodItemNutritionLabel.fat = servingSize.fat;
    foodItemNutritionLabel.carbohydrate = servingSize.carbohydrate;
    foodItemNutritionLabel.protein = servingSize.protein;
    foodItemNutritionLabel.saturatedFat = servingSize.saturatedFat;
    foodItemNutritionLabel.polyunsaturatedFat = servingSize.polyunsaturatedFat;
    foodItemNutritionLabel.monounsaturatedFat = servingSize.monounsaturatedFat;
    foodItemNutritionLabel.transFat = servingSize.transFat;
    foodItemNutritionLabel.cholesterol = servingSize.cholesterol;
    foodItemNutritionLabel.sodium = servingSize.sodium;
    foodItemNutritionLabel.potassium = servingSize.potassium;
    foodItemNutritionLabel.fiber = servingSize.fiber;
    foodItemNutritionLabel.sugar = servingSize.sugar;
    foodItemNutritionLabel.vitaminA = servingSize.vitaminA;
    foodItemNutritionLabel.vitaminC = servingSize.vitaminC;
    foodItemNutritionLabel.vitaminD = servingSize.vitaminD;
    foodItemNutritionLabel.vitaminE = servingSize.vitaminE;
    foodItemNutritionLabel.calcium = servingSize.calcium;
    foodItemNutritionLabel.iron = servingSize.iron;

    return foodItemNutritionLabel;
}

function calculateNutrition(foodItemList, label) {
    label.calories = 0;
    label.fat = 0;
    label.carbohydrate = 0;
    label.protein = 0;
    label.saturatedFat = 0;
    label.polyunsaturatedFat = 0;
    label.monounsaturatedFat = 0;
    label.transFat = 0;
    label.cholesterol = 0;
    label.sodium = 0;
    label.potassium = 0;
    label.fiber = 0;
    label.sugar = 0;
    label.vitaminA = 0;
    label.vitaminC = 0;
    label.vitaminE = 0;
    label.vitaminD = 0;
    label.calcium = 0;
    label.iron = 0;

    for (var i = 0; i < foodItemList.length; i++) {
        label.calories = label.calories + foodItemList[i].servingSize.calories * foodItemList[i].servings;
        label.fat = label.fat + foodItemList[i].servingSize.fat * foodItemList[i].servings;
        label.carbohydrate = label.carbohydrate + foodItemList[i].servingSize.carbohydrate * foodItemList[i].servings;
        label.protein = label.protein + foodItemList[i].servingSize.protein * foodItemList[i].servings;
        label.saturatedFat = label.saturatedFat + foodItemList[i].servingSize.saturatedFat * foodItemList[i].servings;
        label.polyunsaturatedFat = label.polyunsaturatedFat + foodItemList[i].servingSize.polyunsaturatedFat * foodItemList[i].servings;
        label.monounsaturatedFat = label.monounsaturatedFat + foodItemList[i].servingSize.monounsaturatedFat * foodItemList[i].servings;
        label.transFat = label.transFat + foodItemList[i].servingSize.transFat * foodItemList[i].servings;
        label.cholesterol = label.cholesterol + foodItemList[i].servingSize.cholesterol * foodItemList[i].servings;
        label.sodium = label.sodium + foodItemList[i].servingSize.sodium * foodItemList[i].servings;
        label.potassium = label.potassium + foodItemList[i].servingSize.potassium * foodItemList[i].servings;
        label.fiber = label.fiber + foodItemList[i].servingSize.fiber * foodItemList[i].servings;
        label.sugar = label.sugar + foodItemList[i].servingSize.sugar * foodItemList[i].servings;
        label.vitaminA = label.vitaminA + foodItemList[i].servingSize.vitaminA * foodItemList[i].servings;
        label.vitaminC = label.vitaminC + foodItemList[i].servingSize.vitaminC * foodItemList[i].servings;
        label.vitaminE = label.vitaminE + foodItemList[i].servingSize.vitaminE * foodItemList[i].servings;
        label.vitaminD = label.vitaminD + foodItemList[i].servingSize.vitaminD * foodItemList[i].servings;
        label.calcium = label.calcium + foodItemList[i].servingSize.calcium * foodItemList[i].servings;
        label.iron = label.iron + foodItemList[i].servingSize.iron * foodItemList[i].servings;
    }

    return label;
}

angular.module('CalculatorController', [])

    .controller('CalcCtrl', function($scope, $http) {

    console.log("Calc Controller reporting for duty.");

    var mainLabel = new NutritionLabel();
    var foodItemNutritionLabel = new NutritionLabel();

    $scope.nutritionLabel = {};
    $scope.foodItemNutritionLabel = {};

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
            $scope.nutritionLabel = calculateNutrition($scope.foodItemList, mainLabel);

        }, function errorCallback(response) {
            console.log(response);
        });
    };

    //Removes single item from the list when subtract button is clicked.
    $scope.subItem = function (index) {
        console.log("popping index " + index);
        $scope.foodItemList.pop(index);
        $scope.nutritionLabel = calculateNutrition($scope.foodItemList, mainLabel);
    };

    $scope.updateServingSize = function(index, newServingSize){
        $scope.foodItemList[index].servingSize = newServingSize;
        $scope.nutritionLabel = calculateNutrition($scope.foodItemList, mainLabel);
    };

    $scope.updateServings = function(index, newServings){
        $scope.foodItemList[index].servings = newServings;
        $scope.nutritionLabel = calculateNutrition($scope.foodItemList, mainLabel);
    };

    $scope.showFoodItemNutritionLabel = function(foodItem){
        $scope.foodItemNutritionLabel = buildFoodItemNutritionLabel(foodItem, foodItemNutritionLabel);
    };


});
/**
 * Controls all other Pages
 */
