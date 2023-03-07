const db = require("./db");
const Query = {
  greeting: () => {
    return "hello from  Programming Hub!!!";
  },
  students: () => db.students.list(),
};
// here, greeting and students are the resolvers that handle the query
// the students resolver function returns a list of students from the data access layer
// to access resolver functions outside the module, we have to export Query object
module.exports = { Query };
