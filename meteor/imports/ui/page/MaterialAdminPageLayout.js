/**
 * use material theme,
 * see https://demos.creative-tim.com/material-dashboard/docs/2.0/getting-started/introduction.html#docs
 *
 * the link css in component works good in the browser
 */
import React from 'react';

const materialAssetsRoot = '/material';

export default class MaterialAdminPageLayout extends React.Component {
  constructor(props) {
    super(props);
    const that = this;
  }
  render() {
    return (
      <>
        {/* <link
          rel="stylesheet"
          href="https://cdn.bootcss.com/bootstrap/4.1.1/css/bootstrap.min.css"
        /> */}

        <link
          href={
            materialAssetsRoot + '/assets/css/material-dashboard.css?v=2.1.0'
          }
          rel="stylesheet"
        />

        {this.props.children}

        {/* <!--   Core JS Files   --> */}
        <script
          src={materialAssetsRoot + '/assets/js/core/jquery.min.js'}
          type="text/javascript"
        />
        <script
          src={materialAssetsRoot + '/assets/js/core/popper.min.js'}
          type="text/javascript"
        />
        <script
          src={
            materialAssetsRoot +
            '/assets/js/core/bootstrap-material-design.min.js'
          }
          type="text/javascript"
        />
        <script
          src={
            materialAssetsRoot +
            '/assets/js/plugins/perfect-scrollbar.jquery.min.js'
          }
        />

        {/* <!--  Google Maps Plugin    --> */}
        {/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script> */}

        {/* <!--  Notifications Plugin    --> */}
        <script
          src={materialAssetsRoot + '/assets/js/plugins/bootstrap-notify.js'}
        />

        {/* <!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc --> */}
        <script
          src={
            materialAssetsRoot + '/assets/js/material-dashboard.min.js?v=2.1.0'
          }
          type="text/javascript"
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
      </>
    );
  }
}
