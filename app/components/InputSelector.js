// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import InputAdder from './InputAdder';
import RandomAdder from './RandomAdder';

type Props = {
    addRow: () => void,
    generateRandom: () => void,
    method: string
};

class InputSelector extends Component<Props> {
    props: Props;
    render() {
        const {
            addRow,
            generateRandom,
            method,
            pointType
        } = this.props;
        const components = {
            Manual: InputAdder,
            Random: RandomAdder
        }
        console.log(method);
        const Specific = components[method];
        return (
            <Specific addRow={addRow} generateRandom={generateRandom}  />
        );
    }
}

export default InputSelector;