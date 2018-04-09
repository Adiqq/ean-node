// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type Props = {};

export default class Header extends Component<Props> {
    props: Props;

    render() {
        return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Elementy analizy numerycznej
                        </h1>
                        <h2 className="subtitle">
                            Aproksymacje
                        </h2>
                    </div>
                </div>
                <div className="hero-foot">
                    <nav className="tabs is-boxed is-fullwidth">
                        <div className="container">
                            <ul>
                                <li className="is-active"><a>Linear Least Squares</a></li>
                                <li><a>Polynomial Least Squares</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
        );
    }
}
