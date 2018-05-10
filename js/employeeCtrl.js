app.controller('EmployeesController', ['$scope', 'commonService', "$location", function ($scope, commonService, $location) {
    /*call service only one time */
    if (commonService.employeeRecords.length == 0) {
        commonService.getRequest('bg-service/employee.json').then(function (response) {
            $scope.get_employee_data = (response.data.data);
            commonService.employeeRecords = $scope.get_employee_data;
        }, function (error) {
            $scope.no_data = "Sorry ! No data found";
        });
    } else {
        $scope.get_employee_data = commonService.employeeRecords
    }
/*navigated to add employee section*/
    $scope.addEmployee = function () {
        $location.path("/employee/add/");
    }
    /*navigated to edit employee section*/
    $scope.editEmployee = function (id) {
        $location.path("/employee/" + id + "/edit/");
    }
}]);