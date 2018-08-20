import React, { Component } from 'react';

class SmartComponent extends React.Component {
    state = {
        inputText: '',
        displayText: ''
    }

    onChangeHandler = (event) => {
        this.setState({
            inputText: event.target.value
        })
    }

    onClickHandler = (event) => {
        this.setState({
            displayText: this.state.inputText
        })
    }

    render(){
        return(
            <div>
                <p>{this.state.displayText}</p>
                <input 
                type= 'text'
                onChange={this.onChangeHandler}
                value={this.state.inputText}
                />
                <button onClick={this.onClickHandler}>DODAJ TEKST</button>
            </div>
        )
    }
}
export default SmartComponent