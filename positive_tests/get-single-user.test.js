const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in";

const getUserSchema = require("../data/response/get-single-user-schema.json");

describe("Get single user endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Get single user test", async () => {
    await spec()
      .get(`${baseUrl}/api/users/2`)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("Janet")
      .expectJsonSchema(getUserSchema)
      .withQueryParams('id', '2');
  });
});
