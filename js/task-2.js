import users from './users.js';

const getUsersWithEyeColor = (users, color) => 
  // твой код
users.filter(user => user.eyeColor === color);
  



console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]