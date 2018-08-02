import { Meteor } from 'meteor/meteor';
import MyList from '../MyList';

Meteor.publish('MyList.public', function(args) {
  console.log('pub args', args);
  const res = MyList
    .find
    // {
    //   userId: { $exists: false }
    // }
    // {
    //   fields: Lists.publicFields
    // }
    ();

  //   console.log('res---', res);
  return res;
});
