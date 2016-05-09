
function AppConfig($stateProvider, $urlRouterProvider, $locationProvider){

  $stateProvider
    .state('app', {
      abstract: true,
      controllerAs: '$app',
      controller: 'AppCtrl',
      template: require('./_app.html')
    });

  $urlRouterProvider.otherwise('/home');
  $locationProvider.html5Mode(true);
  console.log(process.env.NODE_ENV);
}
export default ['$stateProvider', '$urlRouterProvider', '$locationProvider' , AppConfig]
