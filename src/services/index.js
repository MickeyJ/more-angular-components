import angular from 'angular';

import UserService from './user.service'

export default (
  angular.module('app.services', [])
    .service('UserService', UserService )
)
