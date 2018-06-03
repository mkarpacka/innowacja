'use strict'

app.component('someProducts', {
    templateUrl: './scripts/components/someProducts.tmpl.html',
    bindings: {
        nameTest: '<'
    } ,    
    controllerAs: 'vm',
    controller: ['$scope', function($scope){
        var vm = this, data = {};
        vm.$onInit = function() {
            console.log('Hello world in function!', vm.nameTest);
        }
   
    }]

    





});


