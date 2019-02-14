import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListItem from '../components/list-item';

class AuthorList extends Component {
    render() {
        const { authorsData, limitLeft, limitRight } = this.props;
        return (
            <div>
                {
                    authorsData
                    ? authorsData
                    .slice(limitLeft, limitRight)
                    .map( (elem, i) =>{
                        if(elem.visible === true){
                        return (<ListItem
                            key={i+100}
                            number={i}
                            count_pub={elem.count_pub}
                            pageviews={elem.pageviews}
                            color={elem.color}
                            achivement={elem.achivement}
                        >{elem.name}</ListItem>)}
                        else{ return null}
                        })
                    :null
                }
            </div>
        );
    }
}

AuthorList.propTypes = {
    authorsData: PropTypes.array
};

const mapStateToProps = (state) =>({
    authorsData: state.authorReducer.authors_data,
    limitLeft: state.pagination.left_limit,
    limitRight: state.pagination.right_limit
});

export default connect(mapStateToProps, null)(AuthorList);
