import React from 'react';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <>
        <h1>Hello World {this.props.prop1}</h1>
        {/* root */}
        <a href={FlowRouter.path('App.home')}>Home</a>
        <br />
        {/* pubsub1 */}
        <a href={FlowRouter.path('Test.pubsub1')}>Pubsub1</a>

        <br />
        {/* pubsub2 */}
        <a href={FlowRouter.path('Test.pubsub2')}>Pubsub2</a>

        <br />
        {/* pubsub3 */}
        <a href={FlowRouter.path('Test.pubsub3')}>Pubsub3</a>

        <br />
        {/* newuser */}
        <a href={FlowRouter.path('Test.login')}>Login</a>
        {/* <br />
        login with native ui
        <a
          href={FlowRouter.path(
            'Login.UIAccountsBootstrap',
            {},
            {
              q1: 'q1v'
            }
          )}
        >
          Login With accounts-bootstrap
        </a>
        <br /> */}
        {/* tests */}
        {/* <a
          href={FlowRouter.path(
            'Test.ReactRender',
            {},
            {
              q1: 'q1v'
            }
          )}
        >
          Tests-Render React
        </a> */}
      </>
    );
  }
}
