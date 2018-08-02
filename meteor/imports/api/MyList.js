import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Factory } from 'meteor/dburles:factory';
import { TAPi18n } from 'meteor/tap:i18n';

class ListsCollection extends Mongo.Collection {}

//a non-mongo collection, don't use null name, otherwise you can not publish it
export default (Lists = new ListsCollection('MyList', { connection: null }));

// Deny all client-side updates since we will be using methods to manage this collection
Lists.deny({
  insert() {
    return true;
  },
  update() {
    return true;
  },
  remove() {
    return true;
  }
});

Lists.schema = new SimpleSchema({
  name: { type: String },
  value: { type: String }
});

Lists.attachSchema(Lists.schema);

// This represents the keys from Lists objects that should be published
// to the client. If we add secret properties to List objects, don't list
// them here to keep them private to the server.
Lists.publicFields = {
  name: 1
};

// Factory.define('list', Lists, {});

Lists.helpers({
  // A list is considered to be private if it has a userId set
  isPrivate() {
    return !!this.userId;
  }
});
