import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import { Form } from '../src/components/Form'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Form />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));