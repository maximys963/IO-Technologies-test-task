import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListItem from '../components/list-item';
import randomColor from 'randomcolor';

class AuthorList extends Component {
    render() {
        const { authorsData } = this.props;
        return (
            <div>
                {
                    authorsData
                    ? authorsData.map( (elem, i) =>
                            (<ListItem
                                key={i+100}
                                number={i}
                                count_pub={elem.count_pub}
                                pageviews={elem.pageviews}
                                color={randomColor()}
                            >{elem.name}</ListItem>))
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
    authorsData: state.authorReducer.authors_data
});

export default connect(mapStateToProps, null)(AuthorList);
