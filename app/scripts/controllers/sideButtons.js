app.controller('SideButtonsCtrl', function($scope, $rootScope, $location){

    
    $rootScope.$on('$routeChangeStart', function(){
        switch($location.path()){
            case '/':
                $scope.nextUrl = '#/about';
                $scope.prevUrl = '#/restrictions';
                break;
            case '/about':
                $scope.nextUrl = '#/authorization';
                $scope.prevUrl = '#/';
                break;
            case '/authorization':
                $scope.nextUrl = '#/basics';
                $scope.prevUrl = '#/about';
                break;
            case '/basics':
                $scope.nextUrl = '#/blockchain';
                $scope.prevUrl = '#/authorization';
                break;
            case '/blockchain':
                $scope.nextUrl = '#/';
                $scope.prevUrl = '#/basics';
                break;
        }
    });
});