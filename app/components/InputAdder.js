// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { InputField } from './InputField';
import { mapErrors, minValue0, number, required } from '../helpers/validation';

type Props = {
    addRow: () => void
};

class InputAdder extends Component<Props> {
    props: Props;

    normalizeNumber = (value) => parseInt(value);

    render() {
        const {
            error,
            handleSubmit,
            submitting,
            addRow
        } = this.props;
        return (
            <form onSubmit={handleSubmit(addRow)}>
                <Field
                    name="x"
                    component={InputField}
                    type="number"
                    label="X"
                    normalize={this.normalizeNumber}
                    validate={[required, number, minValue0]}
                />
                <Field
                    name="y"
                    component={InputField}
                    type="number"
                    label="Y"
                    normalize={this.normalizeNumber}
                    validate={[required, number, minValue0]}
                />
                <div className="field">
                    <div className="control">
                        <input
                            className="button is-link"
                            type="submit"
                            value="Dodaj"
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
})(InputAdder);