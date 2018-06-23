app.controller('NavbarCtrl', ['$scope', function($scope){
    var navbarElementsPL = [
        {text: 'About', link: '#/about'},
        {text: 'authorization', link: '#/authorization'},
        {text: 'basics', link: '#/basics'},
        {text: 'blockchain', link: '#/blockchain'},
        {text: 'choosingHistory', link: '#/choosingHistory'},
        {text: 'Demo', link: '#/demo'},
        {text: 'Przykład użycia haszowania', link: '#/comparing'},
        {text: 'Hashing', link: '#/hashing'},
        {text: 'Hash-Puzzle', link: '#/hashPuzzle'},
        {text: 'indentification', link: '#/indentification'},
        {text: 'Opłata za podtrzymanie sieci', link: '#/payingForIntegrity'},
        {text: 'proofOfWork', link: '#/proofOfWork'},
        {text: 'rebase', link: '#/rebase'},
        {text: 'Ograniczenia', link: '#/restrictions'},
    ];
    
    $scope.navbarElements = navbarElementsPL;
}]);