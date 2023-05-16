const { spec, request } = require("pactum");

const { faker } = require("@faker-js/faker");

const baseUrl = "https://reqres.in";

describe("Create new user endpoint test suites ", () => {

  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Create new user test", async () => {

    const randomJob = faker.person.jobTitle();

    const requestBody = {
      name: "Oana Barsan",
      job: randomJob,
    };

     console.log(randomJob);

    await spec()
      .post(`${baseUrl}/api/users`)
      .expectStatus(201)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectResponseTime(3000)
      .expectBodyContains(randomJob);
      
  });
});
