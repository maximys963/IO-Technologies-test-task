import React, {Component} from 'react';
import { Field, reduxForm} from 'redux-form';
import './custom-input.css';

class SearchInput extends Component{ 
render(){     
return( 
    <div className='input-container'>
    <img 
    className='search-img'
    src={require('../assets/images/search.png')}/>
    <Field 
    placeholder='Поиск авторов по имени'
    name='search'
    component='input'
    type='text'
    />
    </div>
);
}
}

SearchInput = reduxForm({
    form: 'search'
})(SearchInput);

export default SearchInput;
