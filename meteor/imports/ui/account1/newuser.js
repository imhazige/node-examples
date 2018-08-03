import { Meteor } from 'meteor/meteor';
import React from 'react';

import BootrstrapPage from '../page/BootstrapPage';

import accountMethod from '../../api/methods-accounts';

export default class Comp extends React.Component {
  constructor(props) {
    super(props);
    const that = this;
    that.state = { email: '', password: '' };
  }
  onClick = () => {
    const that = this;
    //update the collection buy method
    accountMethod.newuser.call(
      {
        email: that.state.email,
        password: that.state.password
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

    //why here have to return false to avoid submit?
    return false;
  };
  render() {
    return (
      <BootrstrapPage>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={this.state.email}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={this.state.password}
            />
          </div>

          <button
            type="button"
            onClick={this.onClick}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </BootrstrapPage>
    );
  }
}
