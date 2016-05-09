/** @namespace this */

class HomeCtrl {
  constructor(AppConstants, UserService) {
    
    this.name = AppConstants.pages.home;
    this.user = UserService.getUser(1);
    
  }
}

export default ['AppConstants', 'UserService', HomeCtrl]
