const { spec } = require("pactum");

const baseUrl = "https://reqres.in";

describe("Try to get resource user negative test with an URL that does not match the predefined URL", () => {

  it("Get resource user negative test with unmatched URL", async () => {
    await spec()
    .get(`${baseUrl}/api/unknown/233sss`)
    .expectStatus(404);
  });

});

describe("Try to get single resource negative test with body contains that does not match the body response", () => {


  it("Get single user resource test with unmatched body contains", async () => {
    await spec()
    .get(`${baseUrl}/api/unknown/2`)
    .expectBodyContains("fuchsia blue");
  });

});

describe("Try to get resource user negative test with shorter response time", () => {

  it("Get single user negative test for shorter response time", async () => {
    await spec()
    .get(`${baseUrl}/api/unknown/2`)
    .expectResponseTime(2);
  });

});

describe("Try to get resource user negative test with different Json schema", () => {

  const requestSchema = require('../data/response/get-resources-list-schema.json');

  it("Get single resource negative test with different json schema", async () => {
    await spec()
    .get(`${baseUrl}/api/unknown/2`)
    .expectJsonSchema(requestSchema);
  });

});
