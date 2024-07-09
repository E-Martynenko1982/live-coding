export class User {
  #isAdmin = false;
  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
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

