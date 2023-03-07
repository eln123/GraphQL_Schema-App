const { DataStore } = require("notarealdb");
// not a real db docs: https://www.npmjs.com/package/notarealdb
// "A 'fake' database for Node.js that stores data in local JSON files, for testing and sample applications"
const store = new DataStore("./data");
module.exports = {
  students: store.collection("students"),
};
