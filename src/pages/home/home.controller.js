/** @namespace this */

class HomeCtrl {
  constructor(AppConstants, UserService) {

    this.appName = AppConstants.appName;

    UserService.getUser(1).then(user => {
      this.user = user.data;
    })

  }
}
export default ['AppConstants', 'UserService', HomeCtrl]
