class User {

  constructor(options) {
    this.firstName = options.firstName;
    this.lastName = options.lastName;
  }

  fullName() {
    return [this.firstName, this.lastName].join(" ");
  }

}

export default User;