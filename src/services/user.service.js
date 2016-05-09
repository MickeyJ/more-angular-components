/** @namespace this */
  
class UserService{
  constructor(AppConstants, $http){
    this.http = $http;
    this.API = AppConstants.API
  }
  getAllUsers(){
    return this.http.get(this.API);
  }
  getUser(id){
    return this.http.get(`${this.API}/${id}`);
  }
}
export default ['AppConstants', '$http', UserService]
