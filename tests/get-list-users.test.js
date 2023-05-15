const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in";

const getListUsersSchema = require("../data/response/get-users-response-schema.json");

const getSingleUserSchema = require("../data/response/get-single-user-response-schema.json");

describe("Get single and list users endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Get list users test", async () => {
    await spec()
      .get(`${baseUrl}/api/users`)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("Bluth")
      .expectJsonSchema(getListUsersSchema);
  });

  it("Get single user with filter id test", async () => {
    const userId = 2;

    await spec()
      .get(`${baseUrl}/api/users/${userId}`)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("Janet")
      .expectJsonSchema(getSingleUserSchema)
      .withQueryParams("id", "2");
  });

  it("Get single user negative test with unmatched URL", async () => {
    await spec()
    .get(`${baseUrl}/api/users/23567`)
    .expectStatus(404);
  });
});
