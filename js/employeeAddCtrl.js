app.controller('EmployeesAddController', ['$scope', 'commonService', '$location', function ($scope, commonService, $location) {
    $scope.employee = {};
/*add employee data*/
    $scope.addEmployee = function () {
        $scope.employee.id = (commonService.employeeRecords.length) + 1;
        commonService.employeeRecords.push($scope.employee);
        $location.path("/");
    }
}]);