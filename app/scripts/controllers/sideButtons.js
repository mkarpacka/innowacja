app.controller('SideButtonsCtrl', function($scope, $rootScope, $location){
    $rootScope.$on('$routeChangeStart', function(){
        switch($location.path()){
            //case: '/' //skoncze to jutro prosze tego nie ruszac :)
        }
    });
});