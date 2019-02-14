import React, { Component} from 'react';
import './list-item.css'

class ListItem extends Component{
    render(){
        const {number, children, count_pub, pageviews, color, achivement} = this.props
        return(
    <div className='list-item-container'
         style={number%2 === 0 
             ?{backgroundColor: 'white'}
             :{backgroundColor: '#f4f6f9'}
        }>
    <div className='zero-limiter'>
        <div className='number-position'>{number + 1}</div>
        <div className='first-limiter'>
        <div className='circle-letter'
        style={{backgroundColor: color}}
        >{children[0]}</div>
        <div className='second-limiter'>
            <div className='name-container'>
                <div className='auth-name'>{children}</div>
                <div className='publications'>{`${count_pub} публ.`}</div>
            </div>
                <div className='third-limiter'>
                <img className='achievement'
                alt='achivement'
                src={achivement === -1
                     ? null 
                     :require(`../assets/medals/${achivement}medal.svg`)} 
                     style={achivement === -1
                         ? {opacity: '0'} 
                         : {opacity: '1'}}/>
                    <div className='pageviews'>{pageviews}</div>
                </div>
        </div>
        </div>
        </div>
    </div>
);
    }}



export default ListItem;




