
function AboutConfig($stateProvider){
  
  $stateProvider
    .state('app.about', {
      url: '/about',
      controllerAs: 'about',
      controller: 'AboutCtrl',
      template: require('./_about.html'),
      title: 'About'
    })
}
export default ['$stateProvider', AboutConfig]
