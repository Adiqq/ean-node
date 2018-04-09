// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputTableRow from './InputTableRow'

type Props = {
    rows: Array<{ x: number, y: number }>
};

export default class InputTable extends Component<Props> {
    props: Props;

    render() {
        const {
            rows
        } = this.props;
        const tableRows = rows.map((row, index) => <InputTableRow key={index} row={row} />);
        return (
            <table className="table is-bordered is-striped is-narrow is-hoverable">
                <thead>
                    <tr>
                        <th>x</th>
                        <th>y</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        );
    }
}
