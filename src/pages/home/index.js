import angular from 'angular';

import HomeConfig from './home.config.js';
import HomeCtrl from './home.controller.js';
import GreetComponent from '../../components/greet/greet.component'

export default (
  angular.module( 'app.home', [] )
    .controller( 'HomeCtrl', HomeCtrl )
    .component( 'greetUser', GreetComponent )
    .config( HomeConfig )
);
