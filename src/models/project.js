const uuidv1 = require('uuid/v1');
class Project {

  constructor(options) {
    this.projectName = options.projectName;
    this.projectUrl = options.projectUrl;
    this.description = options.description;
    this.user_id = options.user_id;
  }

  update(args) {
    var project = this;
    Object.keys(args).map(function(data) {
      return project[project.snakeToCamel(data)] = args[data];
    });
  }

  save() {
    if (this.id === undefined) { this.id = uuidv1() };
    var projectKeyValues = {};
    var project = this;
    Object.keys(this).forEach(function(key) {
      projectKeyValues[key] = project[key];
    });
  }

  snakeToCamel(s){
    return s.replace(/(_\w)/g, function(m){return m[1].toUpperCase();});
  }
}

export default Project;