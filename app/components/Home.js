// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import node from 'ean-native'

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  componentDidMount() {
    console.log(node);
    const p1 = new node.Point(1, 1);
    const p2 = new node.Point(2, 2);
    const p3 = new node.Point(3, 3);

    const lsa = new node.Lsa();
    lsa.addPoint(p1);
    lsa.addPoint(p2);
    lsa.addPoint(p3);
    console.log(lsa.calculateA0());
    console.log(lsa.calculateA1());
  }

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
