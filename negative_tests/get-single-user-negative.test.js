const { spec } = require("pactum");

const baseUrl = "https://reqres.in";

describe("Try to get single user negative test with an URL that does not match the predefined URL", () => {

  it("Get single user negative test with unmatched URL", async () => {
    await spec()
    .get(`${baseUrl}/api/users/23567`)
    .expectStatus(404); //expected status "Pass"
  });

});

describe("Try to get single user negative test with body contains that does not match the body response", () => {


  it("Get single user negative test with different body contains", async () => {
    await spec()
    .get(`${baseUrl}/api/users/2`)
    .expectBodyContains("Janel"); //expected status "Fail"
  });

});

describe("Try to get single user negative test with shorter response time", () => {

  it("Get single user negative test for shorter response time", async () => {
    await spec()
    .get(`${baseUrl}/api/users/2`)
    .expectResponseTime(2); //expected status "Fail"
  });

});

describe("Try to get single user negative test with different Json schema", () => {

  const requestSchema = require('../data/response/get-users-pages-schema.json');

  it("Get single user negative test with different json schema", async () => {
    await spec()
    .get(`${baseUrl}/api/users/2`)
    .expectJsonSchema(requestSchema); //expected status "Fail"
  });

});

