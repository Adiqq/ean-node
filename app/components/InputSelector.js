// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import InputAdder from './InputAdder';
import RandomAdder from './RandomAdder';
import SinAdder from './SinAdder';

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
            pointType,
            generateSin
        } = this.props;
        const components = {
            Manual: InputAdder,
            Random: RandomAdder,
            Sin: SinAdder
        }
        console.log(method);
        const Specific = components[method];
        return (
            <Specific addRow={addRow} generateRandom={generateRandom} generateSin={generateSin}  />
        );
    }
}

export default InputSelector;