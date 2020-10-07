import { data } from "../../../data";
const {
  mers: {
    pages: { about },
  },
} = data;
export default (req, res) => {
  res.statusCode = 200;
  res.json(about);
};
