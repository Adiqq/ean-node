// @flow
import React, { Component } from 'react';
import InputTable from '../components/InputTable';
import InputAdder from '../components/InputAdder';
import Chart from '../components/Chart';
import { Field, reduxForm } from 'redux-form';
import node from 'ean-native';

type Props = {};

class LlsPage extends Component<Props> {
    props: Props;
    state = {
        rows: []
    }

    addRow = (data) => {
        console.log(data);
        let rows = this.state.rows;
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].x === data.x) return;
        }
        this.setState(prevState => ({
            rows: [
                ...prevState.rows,
                data
            ]
        }))
    }
    submitting(data) {
        console.log(data);
        return false;
    }
    onFormSubmit(data) {
        console.log(data);
    }

    getData() {
        let points = this.state.rows.map(value => new node.Point(value.x, value.y));
        const lsa = new node.Lsa();
        for (var i = 0; i < points.length; i++) {
            lsa.addPoint(points[i]);
        }
        const a0 = lsa.calculateA0();
        const a1 = lsa.calculateA1();
        return this.state.rows.sort((a, b) => a.x - b.x).map(value => ({
            x: value.x,
            original: value.y,
            approximated: value.x * a1 + a0
        }));
    }

    render() {
        const {
            handleSubmit
        } = this.props;
        return (
            <div className="section">
                <div className="container">
                    <InputAdder addRow={this.addRow} />
                    <div class="columns">
                        <div class="column">
                            Input
                            <InputTable rows={this.state.rows} />
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            Output
                            <InputTable rows={this.getData().map(obj => {
                                x: obj.x
                                y: obj.approximated
                            })} />
                        </div>
                    </div>
                    
                    <Chart data={this.getData()} />
                </div>
            </div>
        );
    }
}
export default reduxForm({
    form: 'llsForm'
})(LlsPage);