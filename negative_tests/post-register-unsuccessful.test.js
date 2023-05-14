const { spec } = require("pactum");

const baseUrl = "https://reqres.in";


describe("Try to register new user with no data inserted in the body", () => {
  
  it("Register new user with no data inserted in the body", async () => {

    await spec()
      .post(`${baseUrl}/api/register`)
      .expectStatus(400)
  });
});

describe("Try to register new user only with email inserted in the body", () => {
  
  it("Register new user only with email", async () => {

    const requestEmail = {
      "email": "eve.holt@reqres.in",
  }

    await spec()
      .post(`${baseUrl}/api/register`)
      .withBody(requestEmail)
      .expectStatus(400)
  });
});





describe("Try to register new user with different token", () => {
  
  it("Register new user with different token", async () => {

    const requestBody = {
      email: "eve.holt@reqres.in",
      password: "pistol",
    }

    const requestToken = "QpwL5tke4Pnp"; //incorrect token used

    await spec()
      .post(`${baseUrl}/api/register`)
      .withBody(requestBody)
      .withBearerToken(requestToken)
  });
});



describe("Try to register new user with shorter response time", () => {
  
  it("Register new user with shorter response time", async () => {

    const requestBody = {
      email: "eve.holt@reqres.in",
      password: "pistol",
    }

    await spec()
      .post(`${baseUrl}/api/register`)
      .withBody(requestBody)
      .expectResponseTime(5);
  });
});

