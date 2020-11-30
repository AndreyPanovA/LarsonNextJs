const LogicServ = new (class LogicService {
  cnPanovFirst = (str, obj = {}) => {
    for (let key in obj) {
      obj[key] && typeof obj[key] === "boolean" ? (str = str + " " + key) : "";
    }
    return str;
  };
  cn = (str, obj = {}, status = false) => {
    if (typeof obj == 'string') {
      str = str + ' ' + obj;
    } else if (obj.join) {
      if (status) {
        status.map((el, idx) => {
          if (el) {
            str = str + ' ' + [...obj][idx];
          }
        });
      } else {
        str = str + ' ' + [...obj].join(' ');
      }
    } else {
      for (let key in obj) {
        obj[key] && typeof obj[key] === 'boolean' && (str = str + ' ' + key);
      }
    }
    return str;
  };
})();

export default LogicServ;
