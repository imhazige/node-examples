import React from 'react';

export default class Comp extends React.Component {
  render() {
    return (
      <>
        <div className="alert alert-primary" role="alert">
          This is a primary alert—check it out!
        </div>
        <div className="alert alert-info" role="alert">
          This is a info alert—check it out!
        </div>
        <div className="alert alert-success" role="alert">
          This is a success alert—check it out!
        </div>
        <div className="alert alert-danger" role="alert">
          This is a danger alert—check it out!
        </div>
        <div className="alert alert-warning" role="alert">
          This is a warning alert—check it out!
        </div>
        <div className="alert alert-default" role="alert">
          This is a default alert—check it out!
        </div>
      </>
    );
  }
}
