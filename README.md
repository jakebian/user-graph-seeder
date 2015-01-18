# User Graph Seeder for Meteor

This meteor package seeds the Meteor.users table (from accounts-password) with a graph like schema

## Installation

This is a meteor package

```
meteor add jbian-user-graph-seeder
```

## Example using [faker.js](https://github.com/Marak/faker.js)

To use faker.js with meteor, use it as an npm module using meteorhacks:npm package.

```javascript
if(userSeeder.meteorUtil.isEmpty("users")) {
    var faker = Meteor.npmRequire('faker');
    var fakerMap = {
        username: faker.internet.userName,
        email: faker.internet.email,
        password: faker.internet.password
    }
    var userCount = 15; 
    userSeeder.seed(userCount, fakerMap);
    userSeeder.meteorUtil.logCollection("users");
}
```