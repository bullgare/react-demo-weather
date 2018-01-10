import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term:event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <form
          className='input-group'
          onSubmit={this.onFormSubmit}
          >
        <input
            type='text'
            placeholder='Enter a RU city to get a 5 day forecast for'
            className='form-control'
            value={this.state.term}
            onChange={this.onInputChange}
            />
        <span className='input-group-btn'>
          <input className='btn btn-secondary' type='submit' value='Submit!' />
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather: fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
