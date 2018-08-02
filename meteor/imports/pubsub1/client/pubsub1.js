/**
 * low level subscribe without tracker
 */

import React from 'react';

import { Session } from 'meteor/session';

import MyList from '../../api/MyList';
import { mylistupdate } from '../../api/methods';

const countName = 'pubsub1-count';
export default class Comp extends React.Component {
  subclient = null;

  constructor(props) {
    super(props);
    const that = this;
    that.state = { count: 0 };
    that.subclient = Meteor.subscribe('pubsub1', () => {});

    //see https://docs.meteor.com/api/pubsub.html#Meteor-subscribe
    Tracker.autorun(computation => {
      // note, use parameter will cause subscribe new ?
      // see  https://guide.meteor.com/data-loading.html#changing-arguments
      // The computation re-runs, with .subscribe() being re-called either with the same or different arguments.
      // If the subscription is run with the same arguments then the “new” subscription discovers the old “marked for destruction” subscription that’s sitting around, with the same data already ready, and simply reuses that.
      // If the subscription is run with different arguments, then a new subscription is created, which connects to the publication on the server.
      // At the end of the flush cycle (i.e. after the computation is done re-running), the old subscription checks to see if it was re-used, and if not, sends a message to the server to tell the server to shut it down.
      //!!! it really powerful, but also make you like a idiot if you did not noticed this.
      that.subclient = Meteor.subscribe(
        'MyList.public',
        {
          //   arg1: Session.get('pubsub1test')
        },
        //the last parameter is callback
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

      //here do the trick, makde it in the autorun, will execute when change happen
      const o = MyList.findOne({ name: countName });
      if (o) {
        console.log('do----');
        that.setState({ count: o.value });
      }
    });
  }

  onClick = () => {
    const that = this;
    //update the collection buy method
    mylistupdate.call(
      {
        name: countName,
        value: +that.state.count + 1
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
        <h1>gogogo</h1>
        <div>{this.state.count}</div>
        <button onClick={this.onClick}>Click</button>
      </>
    );
  }
}
