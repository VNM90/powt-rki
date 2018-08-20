import React, { Component } from 'react';
import { connect } from 'react-redux'
import { inputAction, displayText } from './state/smartComponent';

const SmartComponent = (props) => (

    <div>
        <p>{props.displayText}</p>
        <input
            type='text'
            onChange={props.onChangeHandler} //add EventListener pod event podpięta  w evencie jest taka wartosc jak target.value
            value={props.inputText}
        />
        <button onClick={props.onClickHandler}>DODAJ TEKST</button>
    </div>
)
const mapStateToProps = state  => ({
    displayText: state.smartComponent.displayText,
    inputText: state.smartComponent.inputText
})

const mapDispatchToProps = dispatch => ({
    onChangeHandler: (event) => dispatch(inputAction(event.target.value)),
    onClickHandler: () => dispatch(displayText())
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(SmartComponent)