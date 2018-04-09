// @flow
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

type Props = {};

export default class Header extends Component<Props> {
    props: Props;

    getNavStyles = (path) => {
        return this.props.location.pathname === path ? "is-active" : "";
    }

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
                                <li className={this.getNavStyles("/lls")}>
                                    <Link to="/lls">
                                        Linear Least Squares
                                    </Link>
                                </li>

                                <li className={this.getNavStyles("/pls")}>
                                    <Link to="/pls">
                                        Polynomial Least Squares
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
        );
    }
}
