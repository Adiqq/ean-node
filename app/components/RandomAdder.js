// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { InputField } from './InputField';
import { mapErrors, minValue0, number, required } from '../helpers/validation';
import {ReadOnlyInputField} from "./ReadOnlyInputField";

type Props = {
    addRow: () => void
};

class RandomAdder extends Component<Props> {
    props: Props;

    normalizeNumber = (value) => parseInt(value);
    normalizeFloat = (value) => parseFloat(value);

    render() {
        const {
            error,
            handleSubmit,
            submitting,
            addRow,
            generateRandom
        } = this.props;
        return (
            <form onSubmit={handleSubmit(generateRandom)}>
                <ReadOnlyInputField label="Description" value="Produces random floating-point values i, uniformly distributed on the interval [a, b)" />
                <Field
                    name="count"
                    component={InputField}
                    type="number"
                    label="Number of elements"
                    normalize={this.normalizeNumber}
                    validate={[required, number, minValue0]}
                />
                <Field
                    name="min"
                    component={InputField}
                    type="number"
                    label="Minimum elements value"
                    normalize={this.normalizeFloat}
                    validate={[number,minValue0]}
                />
                <Field
                    name="max"
                    component={InputField}
                    type="number"
                    label="Maximum elements value"
                    normalize={this.normalizeFloat}
                    validate={[number,minValue0]}
                />
                <div className="field">
                    <div className="control">
                        <input
                            className="button is-link"
                            type="submit"
                            value="Generate"
                            disabled={submitting}
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'addRowForm'
})(RandomAdder);