// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type Props = {
    row: {
        x: number,
        y: number
    }
};

export default class InputTableRow extends Component<Props> {
    props: Props;

    render() {
        const {
            row
        } = this.props;
        return (
            <tr>
                <td>{row.x}</td>
                <td>{row.y}</td>
            </tr>
        );
    }
}
