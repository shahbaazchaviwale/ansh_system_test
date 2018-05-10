app.controller('EmployeesEditController', ['$scope', 'commonService', '$location', function ($scope, commonService, $location) {
/*get URL code*/
    var url = $location.path().split('/');
    $scope.id = url[2];
    //checking URL ID
    var rec = commonService.employeeRecords.filter(function(item){
        if(item.id == $scope.id){
            return item;
        }
    });
    $scope.employee = rec[0];
    /*edit employee data*/
    $scope.editEmployee = function(){
        commonService.employeeRecords.filter(function(item,index){
            if(item.id == $scope.id){
                commonService.employeeRecords[index] = $scope.employee;
            }
        });
        $location.path("/");
    }

}]);