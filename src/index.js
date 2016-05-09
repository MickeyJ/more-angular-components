import angular from 'angular'
import 'angular-ui-router'
import 'jquery'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'angular-animate/angular-animate'
import './style/main.scss'

import AppConstants  from './app_config/app.constants'
import AppConfig  from './app_config/app.config'
import AppCtrl from './app_config/app.controller'
import AppRun from './app_config/app.run'

import './services'
import './components'
import './layout'
import './pages/home';
import './pages/about';

const requires = [
  'ui.router',
  'ngAnimate',
  'app.services',
  'app.layout',
  'app.components',
  'app.home',
  'app.about'
];

angular
  .module( 'app', requires )
  .constant('AppConstants', AppConstants)
  .controller('AppCtrl', AppCtrl )
  .config( AppConfig )
  .run( AppRun );
