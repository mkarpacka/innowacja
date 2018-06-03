app.controller('NavbarCtrl', ['$scope', function($scope){
    var navbarElementsPL = [
        {text: 'About', link: '#/about'},
        {text: 'authorization', link: '#/authorization'},
        {text: 'basics', link: '#/basics'},
        {text: 'blockchain', link: '#/blockchain'},
        {text: 'choosingHistory', link: '#/choosingHistory'},
        {text: 'demo', link: '#/demo'},
        {text: 'distribution', link: '#/distribution'},
        {text: 'hashing', link: '#/hashing'},
        {text: 'histories', link: '#/histories'},
        {text: 'indentification', link: '#/indentification'},
        {text: 'payingForIntegrity', link: '#/payingForIntegrity'},
        {text: 'proofOfWork', link: '#/proofOfWork'},
        {text: 'rebase', link: '#/rebase'},
        {text: 'restrictions', link: '#/restrictions'},
    ];
    
    $scope.navbarElements = navbarElementsPL;
}]);