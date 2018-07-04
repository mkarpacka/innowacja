app.controller('SideButtonsCtrl', function ($scope, $rootScope, $location) {


  var side = 'left';

  $scope.nextUrl = '#/authorization';
  $scope.prevUrl = '#/restrictions';

  $scope.getTransitionInclude = function () {
    return side === 'left' ? '../styles/slideLeft.css'
      :'../styles/slideRight.css';
  
  }

  $scope.setLeftSide = function () {
    side = 'left';
  }

  $scope.setRightSide = function () {
    side = 'right';
    console.log($scope.nextUrl);
  }


  $rootScope.$on('$routeChangeStart', function () {
    switch ($location.path()) {
      case '/':
        $scope.nextUrl = '#/authorization';
        $scope.prevUrl = '#/restrictions';
        break;
      // case '/about':
      //   $scope.nextUrl = '#/authorization';
      //   $scope.prevUrl = '#/';
      //   break;
      case '/authorization':
        $scope.nextUrl = '#/demo';
        $scope.prevUrl = '#/';
        break;
      case '/demo':
        $scope.nextUrl = '#/comparing';
        $scope.prevUrl = '#/authorization';
        break;
      case '/comparing':
        $scope.nextUrl = '#/hashPuzzle';
        $scope.prevUrl = '#/demo';
        break;
      case '/hashPuzzle':
        $scope.nextUrl = '#/hashing';
        $scope.prevUrl = '#/comparing';
        break;
      case '/hashing':
        $scope.nextUrl = '#/payingForIntegrity';
        $scope.prevUrl = '#/hashPuzzle';
        break;
      case '/payingForIntegrity':
        $scope.nextUrl = '#/restrictions';
        $scope.prevUrl = '#/hashPuzzle';
        break;
      case '/restrictions':
        $scope.nextUrl = '#/';
        $scope.prevUrl = '#/payingForIntegrity';
        break;
    }
  });
});
