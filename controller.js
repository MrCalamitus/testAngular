angular.module('app').controller('controlador1',function($scope){
	$scope.distribuidor = null;
	$scope.distribuidores = [
		 {
      idDistribuidor: 1,
      Distribuidor: "Distribuidor 1"
    },
    {
      idDistribuidor: 2,
      Distribuidor: "Distribuidor 2 "
    }
	];
	$scope.listado = [
		{id:1,descripcion:"Distribuidor 1 "},
		{id:2,descripcion:"Distribuidor 2 "}
	];
	
	
	$scope.submit=function(){
		alert('Submit');
	}
});

