import angular from 'angular'
import 'angular-ui-router'
import 'jquery'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'angular-animate/angular-animate'
import 'angular-ui-router-anim-in-out/anim-in-out'
import 'angular-ui-router-anim-in-out/css/anim-in-out.css'
import './style/main.scss'

import AppConfig  from './app/app.config'
import AppCtrl from './app/app.controller'
import AppConstants  from './app/app.constants'

import HeaderComponent from './components/header/header.component'
import FooterComponent from './components/footer/footer.component'

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
  .component('appHeader', HeaderComponent )
  .component('appFooter', FooterComponent )
  .controller('AppCtrl', AppCtrl )
  .config( AppConfig );