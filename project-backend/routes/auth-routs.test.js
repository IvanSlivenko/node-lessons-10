const mongoose = require("mongoose");



const app = require("../app");

const { DB_HOST_TEST, PORT } = process.env;

describe("test signup route", () => {
    let server = null;
    deforeAll(() => {
      server = app.listen(PORT); 
    })

    afterAll((() => {
        server.close();
    }))
 })
