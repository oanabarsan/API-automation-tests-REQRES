const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in";

const getResourceSchema = require("../data/response/get-single-resource-schema.json");

describe("Get single resource endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Get single resource test", async () => {
    await spec()
      .get(`${baseUrl}/api/unknown/2`)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("fuchsia rose")
      .expectJsonSchema(getResourceSchema)
      .withQueryParams('id', '2');
  });
});
