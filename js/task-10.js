import users from './users.js';

const getSortedUniqueSkills = users => {
    const skills = users.reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills.sort();
    }, []);
    const withoutRepetition = skills.filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });
    return withoutRepetition;
  };
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
  