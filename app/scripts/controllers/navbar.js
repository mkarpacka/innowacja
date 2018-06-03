app.controller('NavbarCtrl', ['$scope', function($scope){
    var navbarElementsPL = [
        {text: 'O', link: '#/about'},
        {text: 'Autoryzacja', link: '#/authorization'},
        {text: 'Podstawy', link: '#/basics'},
        {text: 'Blockchain', link: '#/blockchain'},
        {text: 'Wybieranie historii', link: '#/choosingHistory'},
        {text: 'Demo', link: '#/demo'},
        {text: 'Dystrybucja', link: '#/distribution'},
        {text: 'Haszowanie', link: '#/hashing'},
        {text: 'Identyfikacja', link: '#/histories'},
        {text: 'Identyfikacja', link: '#/indentification'},
        {text: 'PayingForIntegrity', link: '#/payingForIntegrity'},
        {text: 'POW', link: '#/proofOfWork'},
        {text: 'Rebase', link: '#/rebase'},
        {text: 'Ograniczenia', link: '#/restrictions'},
    ];
    
    $scope.navbarElements = navbarElementsPL;
}]);