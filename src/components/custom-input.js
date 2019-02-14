import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actionCreators/action-creators'
import './custom-input.css';

class SearchInput extends Component{ 
    render(){  
        const {inputValue, changeInputValue, sortByPageViewDown} = this.props   
    return( 
        <div className='input-container'>
            <img 
            alt='search'
            className='search-img'
            src={require('../assets/images/search.png')}/>
        <input 
        onChange={(e) => changeInputValue(e.target.value)}
        value={inputValue}/>
        <button>pub</button>
        <button onClick={() => sortByPageViewDown()}>pagev</button>
        </div>
    );
    }
    }



const mapStateToProps = (state) => ({
inputValue: state.inputChange.inputValue
});
export default connect(mapStateToProps, actions)(SearchInput);
