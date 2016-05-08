import angular from 'angular';

import HomeConfig from './home.config.js';
import HomeCtrl from './home.controller.js';

export default (
  angular.module('app.home', [])
    .config(HomeConfig)
    .controller('HomeCtrl', HomeCtrl)
);
