import React, { useState} from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

let myStyle = {
    "textAlign": "center",
    "marginTop": "100px"
}



export function Form() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        let response = {
            "name": name,
            "email": email,
            "message": message
        }

        const requestOptions = { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify(response) 
            }; 
                fetch('https://76y592jsbi.execute-api.us-west-1.amazonaws.com/dev', requestOptions)
                    .then(response => response.json())
    }        

        return (
            <div style={myStyle}>
                <h1>Email Form for MK Decision</h1>
                <form method="POST"
                    onSubmit={handleSubmit}>
                    <TextField 
                        required 
                        label="Name" 
                        value={name}
                        onInput={e => setName(e.target.value)}
                    />
                    <br />
                    <TextField 
                        required 
                        type="email" 
                        label="Email" 
                        value={email}
                        onInput={e => setEmail(e.target.value)}
                    />
                    <br />
                    <TextField 
                        required 
                        label="Message" 
                        multiline 
                        rows={2} 
                        rowsMax={4} 
                        value={message} 
                        onInput={e => setMessage(e.target.value)}
                    />
                    <br />
                    <br />
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </div>
        );
}
