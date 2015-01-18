userSeeder.meteorUtil = {
    isEmpty: isEmpty,
    insertUser: insertUser,
    logCollection: logCollection
}

function isEmpty (collection){
    return Meteor[collection].find().count() == 0;
}

// requires accounts-password package
function insertUser (userEntry) {
    return Accounts.createUser(userEntry)
}

// for debugging
function logCollection (collection){
    var collection = Meteor[collection].find();
    collection.forEach(function(item){
        console.log(item);
    }) 
}