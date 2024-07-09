export class User {
  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  #isAdmin = false
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
  get getIsAdmin() {
    return this.#isAdmin;
  }


  set setIsAdmin(value) {
    if (typeof value !== "boolean") {
      console.log('value is not a boolean type')
      return
    }
    this.#isAdmin = value;
  }

}

const user1 = new User(1, 'John', 'Doe');
const user2 = new User(2, 'Jane', 'Doe');
const user3 = new User(3, 'Jim', 'Beam');

console.log(user1.getFullName());
console.log(user2.getFullName());
console.log(user3.getFullName());
