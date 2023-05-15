const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in";

const requestJson = {
  "name": "Oana Barsan",
  "job": "Amazon",
};

describe("Create new user endpoint test suites ", () => {

  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Create new user test", async () => {
    const requestBody = {
      name: "Oana Barsan",
      job: "Amazon",
    };

    await spec()
      .post(`${baseUrl}/api/users`)
      .expectStatus(201)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectResponseTime(3000)
      .expectBodyContains(requestBody.name)
      .withJson(requestJson)
      
  });
});
