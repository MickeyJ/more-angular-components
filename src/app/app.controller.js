
class AppCtrl {
  constructor($state, AppConstants) {

    this.state = $state;
    this.name = AppConstants.appName;
    this.pages = AppConstants.pageNames;
    
  }
}
export default ['$state', 'AppConstants', AppCtrl];
