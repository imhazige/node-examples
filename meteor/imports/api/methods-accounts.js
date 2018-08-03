import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { _ } from 'meteor/underscore';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

export const newuser = new ValidatedMethod({
  name: 'accounts.newuser',
  validate: null,
  run({ email, password }) {
    //see https://docs.meteor.com/api/passwords.html#Accounts-createUser
    //see  https://docs.meteor.com/api/accounts.html#Meteor-loginWithPassword
    // Accounts.findUserByEmail(email);
    console.log('where soes this called', Meteor.isServer);
    try {
      //should not use callback, it will throw error when onserver side, because
      //per the doc, callback only have in client
      Accounts.createUser({ email, password });
    } catch (err) {
      console.log('newuser error:', err);
    }

    return 'method returned';
  }
});

if (Meteor.isServer) {
  const LISTS_METHODS = _.pluck([newuser], 'name');

  // Only allow 5 list operations per connection per second
  DDPRateLimiter.addRule(
    {
      name(name) {
        return _.contains(LISTS_METHODS, name);
      },

      // Rate limit per connection ID
      connectionId() {
        return true;
      }
    },
    5,
    1000
  );
}
