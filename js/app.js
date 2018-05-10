var app = angular.module('angularBody', ["ngRoute"]);
/*routing code*/
app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        redirectTo: "/employee"
    })
        .when("/employee/", {
            templateUrl: "./html/main.html",
            controller: "EmployeesController"
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



