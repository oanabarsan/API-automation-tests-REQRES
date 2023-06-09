const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in";

describe("Delete user endpoint test suites ", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Delete user", async () => {
    const userId = 586;

    await spec()
      .delete(`${baseUrl}/api/users/${userId}`)
      .expectStatus(204)
      .expectResponseTime(3000);

    await spec().get(`${baseUrl}/api/users/${userId}`).expectStatus(404); // (for validating the previous method)
  });
});
