/**
 * use tracker conteiner
 * see https://guide.meteor.com/react.html#using-withTracker
 */

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Session } from 'meteor/session';

import MyList from '../../api/MyList';
import { mylistupdate } from '../../api/methods';

const countName = 'pubsub1-count';

export class PubsubComp2 extends React.Component {
  onClick = () => {
    const that = this;
    //update the collection buy method
    mylistupdate.call(
      {
        name: countName,
        value: +that.props.count + 1
      },
      (err, res) => {
        if (err) {
          console.error(err);
        } else {
          // success!
          console.log('method response', res);
        }
      }
    );
  };

  render() {
    return (
      <>
        <h1>pubsub2</h1>
        <div>{this.props.count}</div>
        <button onClick={this.onClick}>Click</button>
      </>
    );
  }
}

export default (PubsubComp2Container = withTracker(() => {
  const todosHandle = Meteor.subscribe(
    'MyList.public',
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
  const o = MyList.findOne({ name: countName });
  const listExists = !loading && !!o;
  return {
    count: listExists ? o.value : 0
  };
})(PubsubComp2));
