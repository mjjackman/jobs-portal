const uuidv1 = require('uuid/v1');

class User {

  constructor(options) {
    this.id = "1";
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.bio = options.bio;
    this.tagLine = options.tagLine;
    this.store = options.store;
  }

  fullName() {
    return [this.firstName, this.lastName].join(" ");
  }

  update(args) {
    // this.id = args.id;
    this.firstName = args.firstName;
    this.lastName = args.lastName;
    this.bio = args.bio;
    this.tagLine = args.tagLine;
   }

  save() {
    if (this.id === undefined) { this.id = uuidv1() };
    this.store.setItem(this.id, this.toJSON());
  }

  toJSON() {
    return JSON.stringify(this.attributes());
  }

  attributes() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName, 
      bio: this.bio,
      tagLine: this.tagLine,
      store: this.store
    }
  }

}

export default User;