import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Chart from '../components/chart';
import {removeWeather} from '../actions/index';

class WeatherList extends Component {
  constructor(props) {
    super(props);

    this.renderCity = this.renderCity.bind(this);
  }

  renderCity(cityData, pos) {
    const name = cityData.city.name;
    const values = cityData.list.reduce((res, data) => {
      res.temp[data.dt_txt] = Math.round(data.main.temp - 273.15);
      res.pressure[data.dt_txt] = Math.round(data.main.pressure);
      res.humidity[data.dt_txt] = Math.round(data.main.humidity);
      return res;
    }, {temp: {}, pressure: {}, humidity: {}});

    return (
      <tr key={name}>
        <td>{name}</td>

        <td><Chart data={values.temp} colors={["#bdb", "#666"]} /></td>

        <td><Chart data={values.pressure} min={950} colors={["#b00", "#666"]}/></td>

        <td><Chart data={values.humidity} /></td>

        <td style={{verticalAlign: 'middle'}}>
          <div
              className='btn btn-danger'
              onClick={() => this.props.removeWeather(pos)}>
            X
          </div>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature, C</th>
            <th>Pressure, hPa</th>
            <th>Humidity, %</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderCity)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {
    weather
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({removeWeather: removeWeather}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
