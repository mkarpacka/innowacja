app.controller('NavbarCtrl', ['$scope', function($scope){
    var vm = this;
    vm.navbarElementsPL = [
        {text: 'About', link: '#/about'},
        {text: 'Autoryzacja', link: '#/authorization'},
        {text: 'basics', link: '#/basics'},
        {text: 'blockchain', link: '#/blockchain'},
        {text: 'choosingHistory', link: '#/choosingHistory'},
        {text: 'Demo', link: '#/demo'},
        {text: 'Przykład użycia haszowania', link: '#/comparing'},
        {text: 'Hashing', link: '#/hashing'},
        {text: 'Hashing-Puzzle', link: '#/hashPuzzle'},
        {text: 'indentification', link: '#/indentification'},
        {text: 'Opłata za podtrzymanie sieci', link: '#/payingForIntegrity'},
        {text: 'proofOfWork', link: '#/proofOfWork'},
        {text: 'rebase', link: '#/rebase'},
        {text: 'Ograniczenia Blockchaina', link: '#/restrictions'},
    ];
    
    
}]);