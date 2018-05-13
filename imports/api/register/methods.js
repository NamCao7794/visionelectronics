import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Accounts.onCreateUser(function (options, user) {
    var newEmail = user.emails[0].address;
    var emailAlreadyExist = Meteor.users.find({"emails.address": newEmail}, {limit: 1}).count() > 0;

    if (emailAlreadyExist === true) {
        throw new Meteor.Error(403, "email already registered");
    }
    else {
        if (options.profile) {
            user.profile = options.profile;
        }
        return user;
    }
});

Meteor.methods({
    createNewUser: function(user){
        var newUserId = Accounts.createUser({
            profile: {
                name: user.fullNameVar
            },
            username: user.userNamedVar,
            email: user.emailVar,
            password: user.passwordVar
        });

        Accounts.sendEnrollmentEmail(newUserId);
    }
});