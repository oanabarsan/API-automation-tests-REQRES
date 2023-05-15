const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in";

const getUserSchema = require("../data/response/get-users-pages-schema.json");

describe("Get single and list users page 1 and 2 endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Get list users page 1 test", async () => {
    await spec()
      .get(`${baseUrl}/api/users`)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("Bluth")
      .expectJsonSchema(getUserSchema);
  });

  it("Get list users page 2 test", async () => {
    await spec()
      .get(`${baseUrl}/api/users?page=2`)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("Tobias")
      .expectJsonSchema(getUserSchema);
  });

  it("Get single user with filter id test", async () => {

    const userId = 2;

    await spec()
      .get(`${baseUrl}/api/users/${userId}`) 
      .expectStatus(200)  //with filter id=2;
      .expectResponseTime(3000)
      .expectBodyContains("Janet")
      .expectJsonSchema(getUserSchema)
      .withQueryParams('id', '2');
  });
});
