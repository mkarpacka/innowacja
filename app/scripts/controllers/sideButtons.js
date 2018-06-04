app.controller('SideButtonsCtrl', function($scope, $rootScope){
    $rootScope.$on('$routeChangeStart', function(){
        alert('huj')
    })
});