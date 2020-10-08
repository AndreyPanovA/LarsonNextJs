import { data } from "../../../data";
const fs = require("fs");

var path = require("path");
var scriptName = path.basename(__filename);
console.log(scriptName, "cool");
const {
  volvo: {
    pages: { about },
  },
} = data;
export default (req, res) => {
  res.statusCode = 200;
  res.json(about);
};
