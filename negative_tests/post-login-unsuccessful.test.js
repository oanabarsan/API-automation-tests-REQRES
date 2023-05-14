const { spec } = require("pactum");

const baseUrl = "https://reqres.in";


describe("Try to login new user with no data inserted in the body", () => {
  
  it("Register new user with no data inserted in the body", async () => {

    await spec()
      .post(`${baseUrl}/api/login`)
      .expectStatus(400)
  });
});


describe("Try to login only with email inserted in the body", () => {
  
  it("Register new user only with email", async () => {

    const requestEmail = {
      email: "eve.holt@reqres.in",
  }

    await spec()
      .post(`${baseUrl}/api/login`)
      .withBody(requestEmail.email)
      .expectStatus(400)
  });
});


describe("Try to login only with email inserted in the body", () => {
  
  it("Register new user only with email", async () => {

    const requestPass = {
      password: "eve.holt@reqres.in",
  }

    await spec()
      .post(`${baseUrl}/api/login`)
      .withBody(requestPass.password)
      .expectStatus(400)
  });
});



describe("Try to login with shorter response time", () => {
  
  it("Login with shorter response time", async () => {

    await spec()
      .post(`${baseUrl}/api/login`)
      .expectResponseTime(5);
  });
});

