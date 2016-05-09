function HomeConfig($stateProvider) {

  $stateProvider
  .state('app.home', {
    url: '/home',
    controllerAs: 'home',
    controller: 'HomeCtrl',
    template: require('./_home.html')
  });

}

export default ['$stateProvider', HomeConfig];
