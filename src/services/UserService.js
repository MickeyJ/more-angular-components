import userData from '../assets/userData'

class UserService{
  constructor(){
    this.users = userData;
  }
  getUser(id){
    return this.users.filter(x => x.id === id)[0]
  }

}
export default [UserService]
