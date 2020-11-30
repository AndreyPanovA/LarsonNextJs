const FetchServ = new (class FetchService {
  _apiBase = `${process.env.HOST}/api/`;
  _apiLarsonBase = "https://larsonv.ru/mobile.php";
  async getResourse(url, type = "json") {
    return await (await fetch(`${this._apiBase}${url}`))[type]();
  }
  async getResoursePOST(url = "", dataObj, type = "json") {
    return await (
      await fetch(`${this._apiLarsonBase}${url}`, {
        method: "POST",
        body: JSON.stringify(dataObj),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
    )[type]();
  }

  //
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
  async getReviewByIdToProps(id = 1, type = "text") {
    const dataObj = {
      c: "Review",
      m: "getMore",
      from: id,
    };
    return {
      props: {
        json: await this.getResoursePOST("", dataObj, type),
      },
    };
  }
  async getReviewById(id = 1, type = "text") {
    const dataObj = {
      c: "Review",
      m: "getMore",
      from: id,
    };
    return await this.getResoursePOST("", dataObj, type);
  }
})();

export default FetchServ;
