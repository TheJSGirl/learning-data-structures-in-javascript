'use strict';
function User(firstName, lastName, age, gender){
  this.fisrtName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

const user1 = new User('priyanka', 'negi', 20, 'female');
const user2 = new User('aakriti', 'negi', 20, 'female');


console.log(user1);
console.log(user2);

User.prototype.emailDomain = "@gmail.com";
