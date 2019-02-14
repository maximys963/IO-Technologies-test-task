import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthorList from './containers/author-list';
import SearchInput from './components/custom-input'
import randomColor from 'randomcolor';
import * as actions from './actionCreators/action-creators';
import JsonData from './data.json';
import './App.css';

class App extends Component {

  componentDidMount(){
    JsonData.map(elem =>{
      elem.visible = true;
      elem.achivement = '0';
      elem.color = randomColor()
      return(elem)
    })
    this.props.fetchJsonData(JsonData);
  }

  render() {
    return (
      <div className="App">
        <div className='main-container'>
          <SearchInput/>
          <AuthorList/>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(App);