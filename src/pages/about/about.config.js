function AboutConfig($stateProvider){
  
  $stateProvider
    .state('app.about', {
      url: '/about',
      controllerAs: 'about',
      controller: 'AboutCtrl',
      template: require('./_about.html')
    })
}

export default ['$stateProvider', AboutConfig]