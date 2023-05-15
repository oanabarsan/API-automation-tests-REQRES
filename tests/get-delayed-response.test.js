const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in";

describe("Get list users with delay endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Get list users with delay test", async () => {
    await spec()
      .get(`${baseUrl}/api/users?delay=3`)
      .expectStatus(200)
      .withQueryParams('delay', '3') //delayed with 3 seconds

  });

});
