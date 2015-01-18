Package.describe({
    name: 'jbian:user-graph-seeder',
    summary: 'Seeds the Meteor.users table with a graph like schema',
    version: '0.1.1',
    git: 'https://github.com/jakebian/user-graph-seeder.git'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.2.1');

    api.use('underscore', 'server');
    api.use('accounts-password', 'server');

    api.addFiles([
        'src/__module.js',
        'src/_meteor-util.js',
        'src/_util.js',
        'src/seeder.js'
        ],'server');

    api.export('userSeeder','server');

});
