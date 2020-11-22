const LogicServ = new (class LogicService {
  cnPanovFirst = (str, obj = {}) => {
    for (let key in obj) {
      obj[key] && typeof obj[key] === "boolean" ? (str = str + " " + key) : "";
    }
    return str;
  };
  cn = (str, obj = {}) => {
    if (typeof obj == "string") {
      str = str + " " + obj;
    } else if (obj.join) {
      str = str + " " + [...obj].join(" ");
    } else {
      for (let key in obj) {
        obj[key] && typeof obj[key] === "boolean" && (str = str + " " + key);
      }
    }
    return str;
  };
})();

export default LogicServ;
