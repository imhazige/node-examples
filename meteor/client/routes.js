import { FlowRouter } from 'meteor/kadira:flow-router';
import { render } from 'react-dom';
import React from 'react';

// import './layout.js';

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    import('./HelloWorld').then(m => {
      const COMP = m.default;
      render(<COMP />, document.getElementById('app'));
    });
  }
});

// FlowRouter.route('/login/native', {
//   name: 'Login.UIAccountsBootstrap',
//   action(params, queryParams) {
//     import('../imports/login-native/client/login.js').then(m => {
//       BlazeLayout.render('My_Content', { main: 'Login.UIAccountsBootstrap' });
//     });
//   }
// });

/**
 * this is not a correct way. look at the layout, we should not mix layout and react render.
 * because this way works only when user route from the page which layout have been loaded.
 * think about it, if go to this url directly, it will not have the layout loaded, and there will be no
 * container, the #app element have not loaded yet.
 * so if use blazelayout, alway make it the the top render mecanism, and make the react component as a
 * child of the layout
 *
 */
// FlowRouter.route('/test/reactrender', {
//   name: 'Test.ReactRender',
//   action(params, queryParams) {
//     // BlazeLayout.render('My_Content', { main: 'Login.UIAccountsBootstrap' });
//     import('./HelloWorld').then(m => {
//       const COMP = m.default;
//       document.title = '哈哈';

//       render(<COMP />, document.getElementById('app'));
//     });
//     // COMP = require('./HelloWorld').default;
//   }
// });

/**
 * keep in mind, can not use variable in dynamic import
 */
FlowRouter.route('/pubsub1', {
  name: 'Test.pubsub1',
  action(params, queryParams) {
    import('../imports/pubsub1/client/pubsub1').then(m => {
      const COMP = m.default;
      document.title = '';

      render(<COMP />, document.getElementById('app'));
    });
  }
});

FlowRouter.route('/pubsub2', {
  name: 'Test.pubsub2',
  action(params, queryParams) {
    import('../imports/pubsub2/client/pubsub2').then(m => {
      const COMP = m.default;
      document.title = '';

      render(<COMP />, document.getElementById('app'));
    });
  }
});

FlowRouter.route('/pubsub3', {
  name: 'Test.pubsub3',
  action(params, queryParams) {
    import('../imports/pubsub3/client/pubsub3').then(m => {
      const COMP = m.default;
      document.title = '';

      render(<COMP />, document.getElementById('app'));
    });
  }
});

FlowRouter.route('/newuser', {
  name: 'Test.newuser',
  action(params, queryParams) {
    import('../imports/ui/account1/newuser').then(m => {
      const COMP = m.default;
      document.title = '';

      render(<COMP />, document.getElementById('app'));
    });
  }
});

FlowRouter.route('/login', {
  name: 'Test.login',
  action(params, queryParams) {
    import('../imports/ui/account1/login').then(m => {
      const COMP = m.default;
      document.title = '';

      render(<COMP />, document.getElementById('app'));
    });
  }
});

FlowRouter.route('/dashboard', {
  name: 'Test.dashboard',
  action(params, queryParams) {
    import('../imports/ui/dashboard/main').then(m => {
      const COMP = m.default;
      document.title = '';

      render(<COMP />, document.getElementById('app'));
    });
  }
});
