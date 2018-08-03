import { Meteor } from 'meteor/meteor';
import MyList from '../MyList';

Meteor.publish('MyList.public', function(args) {
  console.log('pub args', args, this.userId);
  const res = MyList
    .find
    // {
    //   userId: { $exists: false }
    // }
    // {
    //   fields: Lists.publicFields
    // }
    ();

  const t = MyList.findOne({ name: 'pubsub1-count' });
  console.log('res---', t);
  return res;
});
