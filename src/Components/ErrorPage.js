import React, { Component,Fragment } from 'react';

class ErrorPage extends Component {
  render() {
    console.log('propsNOTFOUND',this.props);
    return (
      <Fragment>
        <h3>404 page not found</h3>
        <p>We are sorry but the page you are looking for does not exist.</p>
      </Fragment>
    )
  }
}

export default ErrorPage;