/**
 * the server side use low level changed to update the collection,
 * it have teh same behavior of a normal collection.
 *
 * see https://guide.meteor.com/react.html#using-withTracker
 */

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Session } from 'meteor/session';

//
const MyList = new Mongo.Collection('publish3.conllection');

export class PubsubComp3 extends React.Component {
  render() {
    return (
      <>
        <h1>pubsub3</h1>
        <div>
          {this.props.count.map(o => {
            return (
              <span key={o.f1}>
                <span>{o.f1}</span>
                <br />
              </span>
            );
          })}
        </div>
        <div />
      </>
    );
  }
}

export default (PubsubComp2Container = withTracker(() => {
  const todosHandle = Meteor.subscribe(
    'publish3',
    {},
    {
      onReady: () => {
        //you will see this called many times,, but the server side did not many new subscribe. because of reuse
        // all this is depend on the reactive change of MyList.findOne in the autorun, it is a condition
        console.log('ready');
      },
      onStop: error => {
        console.log('stop', error);
      }
    }
  );
  const loading = !todosHandle.ready();

  const o = MyList.find();
  console.log('---o', o);
  const listExists = !loading && !!o;
  return {
    count: listExists ? o.fetch() : []
  };
})(PubsubComp3));
