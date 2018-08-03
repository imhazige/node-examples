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

/**
 * see https://guide.meteor.com/data-loading.html#custom-publication
 * but keep in mind, this kind of collection is a local collection,
 * is per connection scope
 */
const h = Meteor.publish('publish3', function() {
  const id = Math.random() + '';

  // We can add documents one at a time,
  // this is required, you can not call changed directly without a added
  // this will only affect this collection ONLY.
  // will not share the data, like many local collection with the same
  //collection name
  //of course, we can use a database to fetch data and send to the per-connection local collection
  //but why do that over using a mongodb collection?
  this.added('publish3.conllection', id, { f1: id });

  // We can call ready to indicate to the client that the initial document sent has been sent
  this.ready();

  // We may respond to some 3rd party event and want to send notifications

  // It's very important to clean up things in the subscription's onStop handler
  this.onStop(() => {
    // Perhaps kill the connection with the 3rd party server
  });
});

//it did not return anything
console.log('hhhh', h);
