'use strict';

  //contrlador para el dibujo
  angular.module('angularJs2BbApp').controller("ctrlDibujo", function($scope)
  {
    $scope.alto = ['a','b','c','d','e','f','g','h', 'i', 'j', 'k', 'l', 'm', 'n'];
    $scope.ancho = [1,2,3,4,5,6,7,8,9,10,11,12];
    $scope.actual = "nulo";
    $scope.elementos = {};
    $scope.color = "#f34";

    $scope.activaElemento = function(indice1, indice2)
    {
    	var cadena  = indice1.toString()+indice2.toString();
    	$scope.actual = cadena;
    	
    	if($scope.elementos[cadena]==null)
    		$scope.elementos[cadena]=1;
    	else
    		$scope.elementos[cadena]++;
    }
  });
