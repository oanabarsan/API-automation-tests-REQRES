const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in";

const getResourceListSchema = require("../data/response/get-resources-list-response-schema.json");

const getSingleResourceSchema = require("../data/response/get-single-resource-response-schema.json");

describe("Get single and list resources page 1 and 2 endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Get list resources test", async () => {
    await spec()
      .get(`${baseUrl}/api/unknown`)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("true red")
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

  it("Try to get resource user negative test with an URL that does not match the predefined URL", async () => {
    await spec()
    .get(`${baseUrl}/api/unknown/233sss`)
    .expectStatus(404); 
  });
});
