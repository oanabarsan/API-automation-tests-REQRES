const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in";
const requestJson = {
  "name": "Oana-Maria Barsan",
  "job": "QA Automation Engineer",
};

describe("Update existing user endpoint test suites ", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Update existing user", async () => {
    const requestBody = {
      name: "Oana-Maria Barsan",
      job: "QA Automation Engineer",
    };

    const postId = 586;

    await spec()
      .put(`${baseUrl}/api/users/${postId}`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains(requestBody.job)
      .withJson(requestJson);
  });
});
