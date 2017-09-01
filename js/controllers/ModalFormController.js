app.controller("ModalFormController", ['$scope', '$modal', '$log',

    function ($scope, $modal, $log) {

        $scope.showForm = function () {
            $scope.message = "Show Form Button Clicked";
            console.log($scope.message);

            var modalInstance = $modal.open({
                templateUrl: 'modal-form.html',
                        return $scope.collectorForm;
                    }
                }
            });
                scope: $scope,
                resolve: {
                    collectorForm: function () {

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
            }]);

var ModalInstanceCtrl = function ($scope, $modalInstance, collectorForm) {
    $scope.form = {}
    $scope.submitForm = function () {
        if ($scope.form.userForm.$valid) {
            console.log('collector form is in scope');
            $modalInstance.close('closed');
        } else {
            console.log('collectorform is not in scope');
        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};