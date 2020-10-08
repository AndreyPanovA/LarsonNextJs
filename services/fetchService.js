const FetchServ = new (class FetchService {
  _apiBase = "http://localhost:3000/api/";
  async getResourse(url, type = "json") {
    return await (await fetch(`${this._apiBase}${url}`))[type]();
  }
  async getHomeKeys(type = "json") {
    return {
      props: {
        json: await this.getResourse(`hello`, type),
      },
    };
  }

  async getExact(page = "volvo", src = "about", type = "json") {
    return {
      props: {
        json: await this.getResourse(`${page}/${src}`, type),
      },
    };
  }
  async getAbout(page = "volvo", type = "json") {
    return {
      props: {
        json: await this.getResourse(`${page}/about`, type),
      },
    };
  }
  async getContact(page = "volvo", type = "json") {
    return {
      props: {
        json: await this.getResourse(`${page}/about`, type),
      },
    };
  }
  async getCorporate(page = "volvo", type = "json") {
    return {
      props: {
        json: await this.getResourse(`${page}/about`, type),
      },
    };
  }
  async getPromo(page = "volvo", type = "json") {
    return {
      props: {
        json: await this.getResourse(`${page}/about`, type),
      },
    };
  }
})();

export default FetchServ;
