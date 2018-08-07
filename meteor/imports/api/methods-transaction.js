import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { _ } from 'meteor/underscore';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';

import MyList, { NAME as MylistName } from './MyList';
import SimpleSchema from 'simpl-schema';

/**
 * use meteor collection to change the dabatase, it will not in the transaction as they are different mongo client
 */
function update1({ name, value }) {
  const t = MyList.findOne({ name: 'pubsub1-count' });
  console.log('>>res---', t);
  MyList.upsert(
    { name },
    {
      $set: { name, value }
    }
  );
}

async function update2({ name, value }, db, session) {
  return new Promise((resolve, reject) => {
    const collection = db.collection(MylistName);
    // const rs = await findDocuments(name);

    // Insert some documents
    // NOTE: you need include the session if using transaction
    collection.update(
      { name },
      { name, value },
      { upsert: true, session },
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
}

const findDocuments = async function(name, db) {
  return new Promise((resolve, reject) => {
    // Get the documents collection
    const collection = db.collection(MylistName);
    // Find some documents
    collection.find({ name }).toArray(function(err, docs) {
      if (err) {
        reject(err);
      } else {
        resolve(docs);
      }
    });
  });
};

export const trans1 = new ValidatedMethod({
  name: 'test.transaction1',
  validate: null,
  run(args) {
    if (Meteor.isServer) {
      //have to import based on server, the client can not import the driver
      const MongoClient = require('mongodb').MongoClient;
      //change collection and then abort
      const dbName = process.env.MONGO_DB_NAME;

      // Use connect method to connect to the server
      const url = process.env.MONGO_URL;
      MongoClient.connect(
        url,
        async function(err, client) {
          console.log('Connected successfully to server');

          const db = client.db(dbName);
          const session = client.startSession();

          //start transasction
          session.startTransaction();
          //do update
          // update1(args);
          const result = await update2(args, db, session);
          console.log('result---', result);
          // const tr = await session.abortTransaction();
          // console.log('tr', tr);
          if (args.abortTrans) {
            await session.abortTransaction();
            console.log('aborted...');
          } else {
            await session.commitTransaction();
            console.log('commited...');
          }
          client.close();
        }
      );
    } else {
      console.log('client running...');
    }

    return 'method returned';
  }
});

if (Meteor.isServer) {
  const LISTS_METHODS = _.pluck([trans1], 'name');

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
