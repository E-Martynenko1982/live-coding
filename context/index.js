// lost context
const testUser = {
  id: 100,
  isLogged: false,

  logIn() {
    console.log(`User with ID: ${this.id} is logged in`)
    this.isLogged = true

  }
}

console.log(testUser.isLogged);
const logInFunc = testUser.logIn;
logInFunc();
console.log(testUser.isLogged)

// #2 lost context
