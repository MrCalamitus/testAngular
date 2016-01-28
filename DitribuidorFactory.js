angular.module('app').factory('DistribuidoresFactory', function ($q, $http) {
        var factory = {};
        factory.getList = function () {
        var defered = $q.defer();
                var parametros = {};
                var config = {
                            headers: {
                                    'Authorization': "disHc1Qn00iELKeMUjUTS4YjAu65UMiq"
                            }
                    };
                $http.post("http://192.168.50.37:8989/SoftvWCFService.svc/TipoDistribuidor/GetTipoDistribuidorList", JSON.stringify(parametros), config).
                                success(function (data, status, headers, config) {
                                        defered.resolve(data.GetTipoDistribuidorListResult);

                                }).
                                error(function (data, status, headers, config) {
                                        defered.reject(data);
                                });

        return defered.promise;
        };


     factory.addDistribuidor = function (descripcion) {
        var defered = $q.defer();


        var parametros = {
            objTipoDistribuidor: {
                Descripcion: descripcion
            }
        };
                var config = {
                            headers: {
                                    'Authorization': "disHc1Qn00iELKeMUjUTS4YjAu65UMiq"
                            }
                    };
                $http.post("http://192.168.50.37:8989/SoftvWCFService.svc/TipoDistribuidor/AddTipoDistribuidor", JSON.stringify(parametros), config).
                                success(function (data, status, headers, config) {
                                        defered.resolve(data.GetTipoDistribuidorListResult);

                                }).
                                error(function (data, status, headers, config) {
                                        defered.reject(data);
                                });

        return defered.promise;
        };


        return factory;
});