
const AppConstants = {
  appName: 'Some App Name',
  pages: {
    home: 'Home',
    about: 'About'
  },
  API:(
    process.env.NODE_ENV !== 'production'
      ? 'http://localhost:3000/users'
      : '/users'
  )
};
export default AppConstants;
