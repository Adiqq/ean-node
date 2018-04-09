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
                    name="X"
                    component={InputField}
                    type="text"
                    label="X"
                    validate={[required, number, minValue0]}
                />
                <Field
                    name="Y"
                    component={InputField}
                    type="text"
                    label="Y"
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