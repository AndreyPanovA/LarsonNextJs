// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data } from "../../data";
const { keys } = data;
export default (req, res) => {
  res.statusCode = 200;
  res.json(keys);
};
