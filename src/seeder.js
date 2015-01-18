userSeeder.seed = seed

function seed(count, fakerMap) {
    var userEntries = userSeeder.util.applyFnMaps(count, fakerMap);

    var userIds = userEntries.map(userSeeder.meteorUtil.insertUser);

    Meteor.users.find().forEach(function(user){
        Meteor.users.update(
            user._id,
            {
                $set: {friends: userSeeder.util.generateNeighbors(user._id, userIds)}
            }
        );
    });
}
