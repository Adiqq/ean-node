// @flow
import React, { Component } from 'react';
import InputTable from '../components/InputTable';
import InputSelector from '../components/InputSelector';
import {SelectField} from '../components/SelectField';
import Chart from '../components/Chart';
import { Field, reduxForm } from 'redux-form';
import node from 'ean-native';

type Props = {};

class LlsPage extends Component<Props> {
    props: Props;
    state = {
        rows: [],
        outputRows: [],
        output: [],
        method: 'Manual',
        pointType: 'Point'
    }

    generateRandom = (data) => {
        const {
            count,
            min,
            max
        } = data;
        if(this.state.pointType === 'Point'){
            const factory = new node.PointFactory("RPS", "");
            const points = factory.generatePoints(count, min, max);
            const lsa = new node.Lsa();
            for (var i = 0; i < points.length; i++) {
                lsa.addPoint(points[i]);
            }
            const a0 = lsa.calculateA0();
            const a1 = lsa.calculateA1();
            const output = points.sort((a, b) => a.x - b.x).map(value => ({
                x: value.x.toString(),
                original: value.y.toString(),
                approximated: (value.x * a1 + a0).toString()
            })) || [];
            const mapped = output.map(function(value){
                return {
                    x: value.x,
                    y: value.approximated
                };
            });
            this.setState(prevState => ({
                rows: points,
                outputRows: mapped,
                output: output
            }))
        }

    }

    addRow = (data) => {
        console.log(data);
        let rows = this.state.rows;
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].x === data.x) return;
        }
        rows = [
            ...this.state.rows,
            data
        ];
        this.getData(rows);
    }
    submitting(data) {
        console.log(data);
        return false;
    }
    onFormSubmit(data) {
        console.log(data);
    }

    onMethodSelect = (event, newValue, previousValue, name) => {
        console.log(newValue);
        this.setState({
            method: newValue
        }, () => console.log(this.state));
        
    } 
    onPointTypeSelect = (event, newValue, previousValue, name) => {
        console.log(newValue);
        this.setState({
            pointType: newValue
        }, () => console.log(this.state));
        
    } 

    getData = (rows) => {
        if(this.state.pointType === 'Point'){
            let points = rows.map(value => new node.Point(value.x, value.y));
            const lsa = new node.Lsa();
            for (var i = 0; i < points.length; i++) {
                lsa.addPoint(points[i]);
            }
            const a0 = lsa.calculateA0();
            const a1 = lsa.calculateA1();
            const output = rows.sort((a, b) => a.x - b.x).map(value => ({
                x: value.x.toString(),
                original: value.y.toString(),
                approximated: (value.x * a1 + a0).toString()
            })) || [];
            const mapped = output.map(function(value){
                return {
                    x: value.x,
                    y: value.approximated
                };
            });
            this.setState(prevState => ({
                rows: rows,
                outputRows: mapped,
                output: output
            }))
        } else {
            let pointsInt = rows.map(value => new node.IntervalPoint(value.x, value.y));
            const lsaInt = new node.LsaInterval();
            for (var i = 0; i < pointsInt.length; i++) {
                lsaInt.addPoint(pointsInt[i]);
            }
            const a0 = lsaInt.calculateA0();
            const a1 = lsaInt.calculateA1();
            const a0avg = (a0[0] + a0[1]) / 2;
            const a1avg = (a1[0] + a1[1]) / 2;
            const output = rows.sort((a, b) => a.x - b.x).map(value => ({
                x: value.x.toString(),
                original: value.y.toString(),
                approximated: (value.x * a1avg + a0avg).toString()
            })) || [];
            const mapped = output.map(function(value){
                return {
                    x: value.x,
                    y: value.approximated
                };
            });
            this.setState(prevState => ({
                rows: rows,
                outputRows: mapped,
                output: output
            }))
        }


    }

    render() {
        const {
            handleSubmit
        } = this.props;
        return (
            <div className="section">
                <div className="container">
                <Field
                name="Method"
                component={SelectField}
                onChange={this.onMethodSelect}
                label="Input method">
                    <option value="Manual">Manual input</option>
                    <option value="Random">Random generation</option>
                </Field>
                <Field
                name="Method"
                component={SelectField}
                onChange={this.onPointTypeSelect}
                label="Point type">
                    <option value="Point">Point</option>
                    <option value="Interval">Interval</option>
                </Field>
                    <InputSelector addRow={this.addRow} generateRandom={this.generateRandom} method={this.state.method} pointType={this.state.pointType} handleSubmit={this.handleSubmit} />
                    <div className="columns">
                        <div className="column">
                            Input
                            <InputTable rows={this.state.rows} />
                        </div>
                        <div className="column">
                            Output
                            <InputTable rows={this.state.outputRows} />
                        </div>
                    </div>
                    
                    <Chart data={this.state.output} />
                </div>
            </div>
        );
    }
}
export default reduxForm({
    form: 'llsForm'
})(LlsPage);