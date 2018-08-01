import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import './layout.js';

import '../imports/login-native/client/login.js';

import React from 'react';
import { render } from 'react-dom';

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('My_Content', { main: 'Login.UIAccountsBootstrap' });
  }
});

FlowRouter.route('/login/native', {
  name: 'Login.UIAccountsBootstrap',
  action(params, queryParams) {
    BlazeLayout.render('My_Content', { main: 'Login.UIAccountsBootstrap' });
  }
});

FlowRouter.route('/test/reactrender', {
  name: 'Test.ReactRender',
  action(params, queryParams) {
    // BlazeLayout.render('My_Content', { main: 'Login.UIAccountsBootstrap' });
    COMP = require('./HelloWorld').default;
    document.title = '哈哈';
    render(<COMP />, document.getElementById('app'));
  }
});
