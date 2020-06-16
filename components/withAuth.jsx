import React, { Component } from 'react';
import Router from 'next/router';
import { ensureUser } from '../functions';

/**
 * @see https://github.com/zeit/next.js/issues/153#issuecomment-257924301
 */
export default function withAuth(WrappedComponent) {
  return class Authenticated extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      try {
        ensureUser();
      } catch (err) {
        return Router.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
