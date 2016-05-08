import angular from 'angular'
import 'angular-ui-router'
import 'jquery'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'angular-animate/angular-animate'
import 'angular-ui-router-anim-in-out/anim-in-out'
import 'angular-ui-router-anim-in-out/css/anim-in-out.css'
import './style/main.scss'

import AppConfig  from './app_config/app.config'
import AppCtrl from './app_config/app.controller'
import AppConstants  from './app_config/app.constants'
import AppHeader from './components/header/header.component.js'
import AppFooter from './components/footer/footer.component.js'

import './pages/home';
import './pages/about';

const requires = [
  'ui.router',
  'ngAnimate', 
  'anim-in-out',
  'app.home',
  'app.about'
];

angular
  .module( 'app', requires )
  .constant('AppConstants', AppConstants)
  .component('appHeader', AppHeader )
  .component('appFooter', AppFooter )
  .controller('AppCtrl', AppCtrl )
  .config( AppConfig );