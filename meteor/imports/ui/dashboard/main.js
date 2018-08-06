/**
 * a dashboard
 */
import { Meteor } from 'meteor/meteor';
import React from 'react';

import BootrstrapPage from '../page/MaterialAdminPageLayout';
import TestAlerts from './example-alerts';

export default class Comp extends React.Component {
  constructor(props) {
    super(props);
    const that = this;
    that.state = { email: '', password: '' };
  }

  render() {
    return (
      <BootrstrapPage>
        <TestAlerts />
      </BootrstrapPage>
    );
  }
}
