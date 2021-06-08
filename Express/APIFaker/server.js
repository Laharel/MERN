const express = require("express");
const app = express();
const port=8000;
const faker = require('faker')
// req is short for request
// res is short for response

class User {
  constructor(){
      this._id = faker.datatype.uuid();
      this.firstName = faker.name.firstName();
      this.lastName = faker.name.lastName();
      this.phoneNumber = faker.phone.phoneNumber();
      this.email = faker.internet.email();
      this.password = faker.internet.password();
  }
}
class Company {
  constructor(){
      this._id = faker.datatype.uuid();
      this.name = faker.company.companyName();
      this.address = {
          street: faker.address.streetAddress(),
          city: faker.address.cityName(),
          state: faker.address.state(),
          zipCode: faker.address.zipCode(),
          country: faker.address.country()
      }
  }
}


// app.get("/api", (req, res) => {
//   res.send("Our express api server is now sending this over to the browser");
// });
app.get("/api/users/new", (req, res) => {
  res.json(new User())
})
app.get("/api/companies/new", (req, res) => {
  res.json(new Company())
})
app.get("/api/user/company", (req, res) => {
  res.json([new User(), new Company()])
})
app.get("/users", (req, res) => {
  res.json({message: "Hello users"})
})
const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
