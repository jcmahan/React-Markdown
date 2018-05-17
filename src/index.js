import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import './index.css'

class DisplayContainer extends Component {
    constructor() {
    super();
    this.state = {
        value: ""
    }
}
    updateValue = (e) => {
        this.setState({value:e.target.value})
        console.log(this.convertMarkdown());
    }
    convertMarkdown = () => {
        return {__html: marked(this.state.value)}
    }

    render() {
        return (
            <div>
                <header className="Index-header">React Markdown</header>
                <div className="Result">
                    <RawInput value={this.state.value} updateValue={this.updateValue}/>
                    <div className="Result-area">
                        <span dangerouslySetInnerHTML={this.convertMarkdown()}></span>
                    </div>
                </div>
            </div>
        )}
}

const RawInput = ({value, updateValue}) => {
    return (
        <div>
            <textarea className="Type-here" rows="9" cols="70" placeholder="Type Markdown here..."onChange={updateValue} value={value}>
            </textarea>
        </div>
    )
}


ReactDOM.render(<DisplayContainer />, document.getElementById('root'))
