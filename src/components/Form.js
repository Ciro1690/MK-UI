import React, {Component} from 'react';
import FormDetails from './FormDetails'

export class Form extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }


handleChange = input => e => {
    this.setState({ [input]: e.target.value })
}

render() {
    const { name, email, message } = this.state
    const values = { name, email, message }
        return (
            <FormDetails
                handleChange={this.handleChange}
                values={values}
            />
        );
    }
}