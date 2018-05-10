var app = angular.module('angularBody', ["ngRoute"]);
/*routing code*/
app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        redirectTo: "/employee"
    })
        .when("/employee/", {
            templateUrl: "./html/main.html",
            controller: "EmployeesController"
        })
        .when("/employee/add/", {
            templateUrl: "./html/add.html",
            controller: "EmployeesAddController"
        })
        .when("/employee/:id/edit/", {
            templateUrl: "./html/edit.html",
            controller: "EmployeesEditController"
        });
});
/*made common services*/
app.factory("commonService", function ($http) {
    var obj = {};
    obj.employeeRecords = [];
    obj.getRequest = function (requestUrl) {
        return $http({ method: "GET", url: requestUrl });
    }
    return obj;
});
/*made custom filter to check numbers*/
app.filter('check_phone_number', function () {
    return function (number) {
        // Ensure that the passed in data is a number
        return isNaN(number) ? 'NA' : number;
    }
});
/*made custom filter for searching specific name*/
app.filter('search_filter', function () {
    return function (dataArray, search_key) {
        if (angular.isUndefined(search_key)) { return dataArray; }

        var tmp = [];
        if (angular.isDefined(dataArray)) {
            tmp = dataArray.filter(function (item) {
                if ((item.name.toLowerCase()).startsWith((search_key.toLowerCase()))) {
                    return item;
                }
                if ((item.address.city.toLowerCase()).startsWith((search_key.toLowerCase()))) {
                    return item;
                }
            });
        }
        return tmp;
    }
});


