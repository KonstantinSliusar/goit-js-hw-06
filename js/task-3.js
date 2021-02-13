import users from './users.js';

const getUsersWithGender = (users, gender) => {
  const maleGender = users.filter(user => user.gender === gender);
  return maleGender.map(user => user.name);
};
console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]