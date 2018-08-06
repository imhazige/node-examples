/**
 * use material theme,
 * see https://demos.creative-tim.com/material-dashboard/docs/2.0/getting-started/introduction.html#docs
 */
import React from 'react';

export default class MaterialAdminPageLayout extends React.Component {
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

        {/* <!--     Fonts and icons , use china cdn, https://www.font.im/fonts/about   --> */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.font.im/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        {this.props.children}
      </>
    );
  }
}
