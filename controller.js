angular.module('app').controller('controlador1', function ($scope, DistribuidoresFactory) {
    $scope.distribuidor = null;
    $scope.descripcion = "Descripcion del distribuidor";
    $scope.distribuidores = [{
            idDistribuidor: 1,
            Distribuidor: "Distribuidor 1"
        }, {
            idDistribuidor: 2,
            Distribuidor: "Distribuidor 2 "
        }];
    $scope.listado = [{
            id: 1,
            descripcion: "Distribuidor 1 "
        }, {
            id: 2,
            descripcion: "Distribuidor 2 "
        }];

    $scope.submit = function () {
        DistribuidoresFactory.addDistribuidor($scope.descripcion).then(function (data) {
            getListDistribuidores();
        }, function (data) {
            getListDistribuidores();
        });
    };


    var getListDistribuidores = function () {

        DistribuidoresFactory.getList().then(
                function (data) {
                    $scope.listado = data;
                }, function (data) {
            alert(data);
        }
                );
    };
    getListDistribuidores();
});