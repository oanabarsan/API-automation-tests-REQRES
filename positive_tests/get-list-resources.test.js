const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in";

const getResourceListSchema = require("../data/response/get-resources-list-schema.json");

const getSingleResourceSchema = require("../data/response/get-single-resource-schema.json");

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
      .expectJsonSchema(getResourceListSchema);
  });

  it("Get list resources page 2 test", async () => {
    await spec()
      .get(`${baseUrl}/api/unknown?page=2`)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("blue iris")
      .expectJsonSchema(getResourceListSchema);
  });

  it("Get single resource test", async () => {

    const resourceId = 2;
    
    await spec()
      .get(`${baseUrl}/api/unknown/${resourceId}`)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("fuchsia rose")
      .expectJsonSchema(getSingleResourceSchema)
      .withQueryParams("id", "2");
  });
});
