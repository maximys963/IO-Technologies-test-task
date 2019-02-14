import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthorList from './containers/author-list';
import SearchInput from './components/custom-input'
import randomColor from 'randomcolor';
import Pagination from './components/pagination';
import * as actions from './actionCreators/action-creators';
import JsonData from './data.json';
import './App.css';

class App extends Component {

  componentDidMount(){
    const {fetchJsonData} = this.props
    JsonData
    .sort(function(author1, author2)
    {return author2.pageviews - author1.pageviews})
    .map((elem, i) =>{
      if(i < 3){
        elem.achivement = i+1;
      }else{
        elem.achivement = -1;
      }
      elem.visible = true;
      elem.color = randomColor()
      return(elem)
    })
   
    fetchJsonData(JsonData);
  }

  render() {
    return (
      <div className='App'>
        <div className='main-container'>
          <SearchInput/>
          <AuthorList/>
        </div>
        <Pagination 
        moveNextPage={()=>this.props.nextPage()}/>
      </div>
    );
  }
}

export default connect(null, actions)(App);