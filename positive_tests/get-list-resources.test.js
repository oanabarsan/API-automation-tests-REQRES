const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in";

const getResourceSchema = require("../data/response/get-resources-list-schema.json");

describe("Get single and list resources page 1 and 2 endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Get list resources page 1 test", async () => {
    await spec()
      .get(`${baseUrl}/api/unknown`)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("true red")
      .expectJsonSchema(getResourceSchema);
  });

  it("Get list resources page 2 test", async () => {
    await spec()
      .get(`${baseUrl}/api/unknown?page=2`)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("blue iris")
      .expectJsonSchema(getResourcesSchema);
  });

  it("Get single resource test", async () => {
    await spec()
      .get(`${baseUrl}/api/unknown/2`)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("fuchsia rose")
      .expectJsonSchema(getResourceSchema)
      .withQueryParams("id", "2");
  });
});
