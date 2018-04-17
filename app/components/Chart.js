// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import node from 'ean-native';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
type Props = {};

export default class Chart extends Component<Props> {
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
        const { data } = this.props;
        return (
            <div className="box">
                <LineChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5
                    }}
                >
                    <XAxis type="number" dataKey="x" scale="linear" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="linear" dataKey="original" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="linear" dataKey="approximated" stroke="#82ca9d" />
                </LineChart>
            </div>
        );
    }
}
