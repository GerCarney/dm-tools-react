import React, { Component } from 'react';
import { connect } from 'react-redux';

import {saveChanges, closeModal} from '../actions'

import './ModalBox.css'








class ModalBox extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            inputVal:0,
            target:null
        }   
    }

    componentDidMount() {
        this.refs.field.select();
    }
    

    handleChange = (e) => {
        this.setState({inputVal:e.target.value});
    }

    handleKeydown = (e) => {
      if(e.keyCode === 13){
        
        this.props.saveChanges({
            val:this.state.inputVal,
            ...this.props.modal,
            type:'SAVE_CHANGES_'+(this.props.modal.section.toUpperCase())
        });

        this.props.closeModal();
      }
    }

    
    componentWillMount() {
        
        // The object in the Store we'll be targetting
        var target = this.props.category.filter( row => row.id === this.props.modal.id)[0];

        // The exact value we're targetting
        var targetVal = target[this.props.modal.field];


        this.setState({
            inputVal:targetVal
        })
        
    }
    


    render() {

        var modal = this.props.modal;

        return (
            <div className="modal">
                <h2>{modal.field}</h2>
                <input ref="field" value={this.state.inputVal} onChange={this.handleChange} onKeyDown={this.handleKeydown} type="text"/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        modal:state.modal,
        category:state[state.modal.section]
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveChanges: (changeData) => {
            dispatch(saveChanges(changeData))
        },
        closeModal: () => {
            dispatch(closeModal())
        },
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalBox);