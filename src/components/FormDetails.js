import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'



export class FormDetails extends Component {
    
    handleSubmit() {
        alert("Thank you")
    }

    render() {
        const { values, handleChange } = this.props
        return (
            <FormControl method="POST"
                onSubmit={this.handleSubmit}>
                <TextField required label="Required" defaultValue="Name" />
                <br/>
                <TextField required label="Required" defaultValue="Email" />
                <br/>
                <TextField required label="Required" defaultValue="Message" />
                <br/>
                <br/>
                <Button type="submit" fullWidth variant="contained" color="primary">
                    Submit
                </Button>  
            </FormControl>
        )
    }
}

export default FormDetails