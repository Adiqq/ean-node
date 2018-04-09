// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import Chart from '../components/Chart';
import Header from '../components/Header';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className="container">
          <Home />
          <Chart />
        </div>
      </div>
    );
  }
}
