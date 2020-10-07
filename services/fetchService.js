const FetchServ = new (class FetchService {
  _apiBase = "http://localhost:3000/api/";
  async getResourse(url, type = "json") {
    return await (await fetch(`${this._apiBase}${url}`))[type]();
  }
  async getAbout(page = "volvo", type = "json") {
    return {
      props: {
        json: await this.getResourse(`${page}/about`, type),
      },
    };
  }
  async getAllPeople() {
    return (await this.getResourse("/people/")).results;
  }
  getPerson(id) {
    return this.getResourse(`/people/${id}`);
  }
  async getAllPlanets() {
    return (await this.getResourse("/planets/")).results;
  }
  getPlanet(id) {
    return this.getResourse(`/planets/${id}`);
  }
  async getAllStarships() {
    return (await this.getResourse("/starships/")).results;
  }
  getStarship(id) {
    return this.getResourse(`/starships/${id}`);
  }
})();

export default FetchServ;
