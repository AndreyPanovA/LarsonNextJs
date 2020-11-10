// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { data } from "../../data";
const { data } = require("../../data");
const { keys } = data;
export default (req, res) => {
  try {
    res.statusCode = 200;
    res.json(keys);
  }
  catch(e) {
    console.log(e)
  }

};
