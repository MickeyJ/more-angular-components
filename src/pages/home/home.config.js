function HomeConfig($stateProvider) {

  $stateProvider
  .state('app.home', {
    url: '/home',
    controllerAs: 'home',
    controller: 'HomeCtrl',
    template: require('./home.html')
  });

}

export default ['$stateProvider', HomeConfig];
