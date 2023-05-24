const request = require("supertest");
const server = require("../server");
const { getUserByLogin } = require('../service/userService');

jest.mock("../service/userService.js");

test("should return 401 when login is invalid", async() => { 
  const response = await request(server)
  .post("/login")
  .send({
    login:"any@email.com",
    password: "anypassword"
  });

  expect(response.statusCode).toBe(401);
});

test("should return 200 when login is valid", async() => {

  getUserByLogin.mockResolvedValue({
    login: "user",
    password: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0LCJsb2dpbiI6InVzZXIifSwiaWF0IjoxNjg0OTY3MDIxfQ.U9XdNZ1hHkvDrxpXfPy_wIKHUrPtstR0nQqFepfGefE"
  });
  
  const response = await request(server)
    .post("/login")
    .send({
      login: "user",
      password: "321"
    });

    console.log(response);
    expect(response.statusCode).toBe(200);
});