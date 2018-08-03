import React from 'react';

export default class BootrstrapPage extends React.Component {
  constructor(props) {
    super(props);
    const that = this;
  }
  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://cdn.bootcss.com/bootstrap/4.1.1/css/bootstrap.min.css"
        />

        {this.props.children}

        <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.slim.min.js" />
        <script src="https://cdn.bootcss.com/popper.js/1.14.3/umd/popper.min.js" />
        <script src="https://cdn.bootcss.com/bootstrap/4.1.1/js/bootstrap.min.js" />
      </>
    );
  }
}
