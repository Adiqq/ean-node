// @flow
import React, { Component } from 'react';
import InputTable from '../components/InputTable';
import InputAdder from '../components/InputAdder';

type Props = {};

export default class LlsPage extends Component<Props> {
    props: Props;

    addRow(data) {
        console.log(data);
    }

    render() {
        const rows = [
            { x: 1, y: 1 },
            { x: 2, y: 3 },
            { x: 3, y: 5 }
        ];
        return (
            <div className="section">
                <div className="container">
                    <InputAdder addRow={this.addRow} />
                    <InputTable rows={rows} />
                </div>
            </div>
        );
    }
}
