
const HeaderComponent = {
  template: require('./_header.html'),
  controllerAs: 'header',
  bindings: {
    appName: '=',
    pages: '='
  }
};

export default HeaderComponent;
