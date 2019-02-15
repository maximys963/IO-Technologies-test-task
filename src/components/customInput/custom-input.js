import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actionCreators/action-creators'
import { Button } from 'semantic-ui-react'
import './custom-input.css';

class SearchInput extends Component{ 

    onPageViewSortClick = () => {
        const {togglePageView, pagevToggleValue, sortByPageViewDown,  sortByPageViewUp} = this.props;
        if(pagevToggleValue === true){
            sortByPageViewDown()
        }else{
            sortByPageViewUp()
        }
        togglePageView()
     };

     onPublicationSortClick = () =>{
         const {sortPublicationDown, sortPublicationUp, togglePublications, publToggleValue} = this.props
         if(publToggleValue === true){
             sortPublicationDown()
         }else{
             sortPublicationUp()
         }
         togglePublications()
     };

    render(){  
        const {inputValue, changeInputValue} = this.props;
    return( 
        <div className='input-container'>
            <img 
            alt='search'
            className='search-img'
            src={require('../../assets/images/search.png')}/>
        <input 
        onChange={(e) => changeInputValue(e.target.value)}
        value={inputValue}/>
        <Button basic color='grey' onClick={()=>this.onPublicationSortClick()}>publications</Button>
        <Button basic color='grey' onClick={() => this.onPageViewSortClick()}>pageviews</Button>
        </div>
    );
    }}



const mapStateToProps = (state) => ({
inputValue: state.inputChange.inputValue,
pagevToggleValue : state.toggleSortButtons.view_sort_direction,
publToggleValue : state.toggleSortButtons.publ_sort_direction
});
export default connect(mapStateToProps, actions)(SearchInput);
