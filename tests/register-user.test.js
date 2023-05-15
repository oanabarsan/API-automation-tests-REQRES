const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in";

const requestToken = "QpwL5tke4Pnpja7X4";

describe("Register new user endpoint test suites ", () => {
  before(() => {
    request.setDefaultTimeout(10000);
  });

  it("Register new user", async () => {

    const requestBody = {
      email: "eve.holt@reqres.in",
      password: "pistol",

    }
    await spec()
      .post(`${baseUrl}/api/register`)
      .expectStatus(200)
      .withHeaders("Content-Type", "application/json")
      .withBearerToken(requestToken) 
      .withBody(requestBody)
      .expectResponseTime(5000);
  });

  it("Try to register new user with no data inserted in the body", async () => {

    await spec()
      .post(`${baseUrl}/api/register`)
      .expectStatus(400) 
  });

  it("Try to register new user only with email inserted in the body", async () => {

    const requestEmail = {
      "email": "eve.holt@reqres.in",
  }

    await spec()
      .post(`${baseUrl}/api/register`)
      .withBody(requestEmail)
      .expectStatus(400) 
  });

  it("Try to register new user only with email inserted in the body", async () => {

    const requestEmail = {
      "email": "eve.holt@reqres.in",
  }

    await spec()
      .post(`${baseUrl}/api/register`)
      .withBody(requestEmail)
      .expectStatus(400) 
  });
});
