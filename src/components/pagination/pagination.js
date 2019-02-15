// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import './pagination.css';

const activeStyles = {
    opacity: '1',
    cursor: 'pointer'
};
const disableStyles = {
    opacity: '0',
    cursor: 'default'
};

const Pagination = (props) => {
    const {limitLeft, limitRight, dataLength, currentPage} = props;
    const lastPageIndex = Math.ceil(dataLength/10);
    return( 
        <div className='pagination-container'>
            <div className='centaral-container'>
                <img 
                    onClick={
                        currentPage === 1
                            ? null
                            : ()=> props.movePrevPage()}
                    src={require('../../assets/images/back.svg')}
                    style={
                        currentPage === 1
                            ? disableStyles
                            : activeStyles
                    }
                    alt='left-arrow'
                />
                <div className='numbers'>{limitLeft+1}</div>
                <div className='numbers'>-</div>
                <div className='numbers'>{limitRight}</div>
                <img 
                    onClick={
                        currentPage === lastPageIndex 
                            ? null
                            : () => props.moveNextPage()
                    }
                    style={
                        currentPage === lastPageIndex
                            ? disableStyles
                            : activeStyles
                    }
                    src={require('../../assets/images/right-arrow.svg')}
                    alt='right-arrow'
                />
            </div>
        </div>
    );};

const mapStateToProps = (state) =>({
    limitLeft: state.pagination.left_limit,
    limitRight: state.pagination.right_limit
});

export default connect(mapStateToProps, null)(Pagination);