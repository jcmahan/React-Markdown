import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

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
                <header>React Markdown</header>
                <RawInput value={this.state.value} updateValue={this.updateValue}/>
                <span dangerouslySetInnerHTML={this.convertMarkdown()}></span>
            </div>
        )}
}

const RawInput = ({value, updateValue}) => {
    return (
        <div>
            <textarea rows="4" cols="50" onChange={updateValue} value={value}>
            </textarea>
        </div>
    )
}


ReactDOM.render(<DisplayContainer />, document.getElementById('root'))
