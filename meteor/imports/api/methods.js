import MyList from './MyList';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { _ } from 'meteor/underscore';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import SimpleSchema from 'simpl-schema';
import './methods-accounts';
import './methods-transaction';

// export const mylistupdate = Meteor.methods({
//   'mylist.update'({ name, value }) {
//     MyList.update(
//       { name },
//       {
//         $set: { name, value }
//       }
//     );

//     return 'method returned';
//   }
// });

export const mylistupdate = new ValidatedMethod({
  name: 'mylist.update',
  //   validate: new SimpleSchema({
  //     name: { type: String },
  //     value: { type: String }
  //   }).validator({
  //     clean: true
  //   }),
  validate: null,
  run({ name, value }) {
    // name = '--';
    console.log('-----------', name, value);
    const t = MyList.findOne({ name: 'pubsub1-count' });
    console.log('>>res---', t);
    MyList.upsert(
      { name },
      {
        $set: { name, value }
      }
    );

    return 'method returned';
  }
});

if (Meteor.isServer) {
  const LISTS_METHODS = _.pluck([mylistupdate], 'name');

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
