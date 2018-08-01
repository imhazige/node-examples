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

/**
 * this is not a correct way. look at the layout, we should not mix layout and react reander.
 * because this way works only when user route from the page which layout have been loaded.
 * thik about it, if go to this url directly, it will not have the layout loaded, and there will be no
 * container, the #app element have not loaded yet.
 * so if use blazelayout, alway make it the the top render mecanism, and make the react component as a
 * child of the layout
 *
 */
FlowRouter.route('/test/reactrender', {
  name: 'Test.ReactRender',
  action(params, queryParams) {
    // BlazeLayout.render('My_Content', { main: 'Login.UIAccountsBootstrap' });
    import('./HelloWorld').then(m => {
      const COMP = m.default;
      document.title = '哈哈';

      render(<COMP />, document.getElementById('app'));
    });
    // COMP = require('./HelloWorld').default;
  }
});
