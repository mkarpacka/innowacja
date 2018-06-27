app.controller('SideButtonsCtrl', function ($scope, $rootScope, $location) {


  var side = 'left';

  $scope.getTransitionInclude = function () {
    if (side === 'left') {
      return '../styles/slideRight.css';
    } else {
      return '../styles/slideLeft.css';
    }
  }

  $scope.setLeftSide = function () {
    side = 'left';
  }

  $scope.setRightSide = function () {
    side = 'right';
  }


  $rootScope.$on('$routeChangeStart', function () {
    switch ($location.path()) {
      case '/':
        $scope.nextUrl = '#/about';
        $scope.prevUrl = '#/restrictions';
        break;
      case '/about':
        $scope.nextUrl = '#/authorization';
        $scope.prevUrl = '#/';
        break;
      case '/authorization':
        $scope.nextUrl = '#/demo';
        $scope.prevUrl = '#/about';
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
