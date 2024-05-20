export const ModulePaths = {
  MyProfile: '/my-user',
  Auth: '/auth',
  Me: '/me',
};

export const Paths = {
  Home: '/',
  Login: '/login',
  SignUp: '/signup',
  ForgotPassword: '/forgot-password',
  ResetPassword: '/reset-password',
  Success: '/success',
  Dashboard: '/dashboard',
  SchoolFilter: (id) => `/school?majors=${id}`,
};
