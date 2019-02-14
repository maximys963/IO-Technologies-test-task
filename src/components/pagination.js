import React from 'react';
import { connect } from 'react-redux';
import './pagination.css';

const Pagination = (props) => {
    const {limitLeft, limitRight} = props
    return( 
    <div className='pagination-container'>
    <div className='centaral-container'>
    <img 
    src={require('../assets/images/back.svg')}
    alt='left-arrow'
    />
    <div className='numbers'>{limitLeft+1}</div>
    <div className='numbers'>-</div>
    <div className='numbers'>{limitRight}</div>
    <img 
    onClick={() => props.moveNextPage()}
    src={require('../assets/images/right-arrow.svg')}
    alt='right-arrow'
    />
    </div>
    </div>
)}

const mapStateToProps = (state) =>({
    limitLeft: state.pagination.left_limit,
    limitRight: state.pagination.right_limit
});

export default connect(mapStateToProps, null)(Pagination);