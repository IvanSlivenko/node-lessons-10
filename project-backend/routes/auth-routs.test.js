const mongoose = require("mongoose");
const request = require("supertest");



//імпортуємо server
const app = require("../app");

const User =require("../models/user")

const { DB_HOST_TEST, PORT } = process.env;

describe("test signup route", () => {
    let server = null;
  deforeAll(async () => {
    await mongoose.connect(DB_HOST_TEST);

    //запускаємо server
    server = app.listen(PORT);
  });

  afterAll(async() => {
    await mongoose.connection.close();
        server.close();
  })
  test("test correct signup data", async () => {
    const signupData = {
      name: "Ivan",
      email: "ivan8822@ukr.net",
      password:"",
      
    }
    const { body, statusCode } = await request(app).post("/api/auth/signup").send(signupData);
    expect(statusCode).toBe(201);
    expect(body.name).toBe(signupData.name);
    expect(body.email).toBe(signupData.email);
    expect(body.password).toBe(signupData.password);

    const user = await User.findOne({ email: signupData.email });
    expect(user.email).toBe(signupData.email);
    expect(user.email).toBe(signupData.email);

    

  })

 })
