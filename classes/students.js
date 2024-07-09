import { User } from "./user.js ";

export class Student extends User {
  #isActive = true;
  constructor(id, firstName, lastName, group, points) {
    super(id, firstName, lastName,)
    this.group = group;


  }
  get getIsActive() {
    this.#isActive
  }

  set setIsActive(value) {
    this.#isActive = value;
  }
}



