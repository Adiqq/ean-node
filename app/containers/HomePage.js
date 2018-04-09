// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import Chart from '../components/Chart';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className="container">
        <Home />
        <Chart />
      </div>
    );
  }
}
