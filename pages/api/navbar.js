// import { data } from "../../data";
const { data } = require("../../data");
const { nav } = data;
export default (req, res) => {
  res.statusCode = 200;
  res.json(nav);
};
