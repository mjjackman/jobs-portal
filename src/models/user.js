const uuidv1 = require('uuid/v1');

class User {

  constructor(options) {
    this.id = "1";
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.bio = options.bio;
    this.tagLine = options.tagLine;
    this.store = localStorage;
  }

  fullName() {
    return [this.firstName, this.lastName].join(" ");
  }

  update(args) {
    var user = this;
    Object.keys(args).map(function(data) {
      return user[user.snakeToCamel(data)] = args[data];
    });
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

  snakeToCamel(s){
    return s.replace(/(_\w)/g, function(m){return m[1].toUpperCase();});
  }
}

export default User;