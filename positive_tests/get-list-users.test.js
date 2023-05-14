const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in";

const getUsersSchema = require("../data/response/get-users-pages-schema.json");

describe("Get list users page 1 and 2 endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Get list users page 1 test", async () => {
    await spec()
      .get(`${baseUrl}/api/users`)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("Bluth")
      .expectJsonSchema(getUsersSchema);
  });

  it("Get list users page 2 test", async () => {
    await spec()
      .get(`${baseUrl}/api/users?page=2`)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("Tobias")
      .expectJsonSchema(getUsersSchema);
  });
});
