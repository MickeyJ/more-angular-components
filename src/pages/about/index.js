import angular from 'angular'

import AboutConfig from './about.config.js'
import AboutCtrl from './about.controller.js'

export default (
  angular.module( 'app.about', [] )
    .config( AboutConfig )
    .controller( 'AboutCtrl', AboutCtrl )
)
