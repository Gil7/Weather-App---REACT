import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import Form from './components/Form'
import  keys  from './keys.json'
import Weather from './components/Weather'
import Jumbotron from './components/Jumbotron'
class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    error:  undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value

    if(city && country){
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${keys.API_KEY_WEATHER_APP}`)
      console.log(api_call)
      if(api_call.status == 404){
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          description: undefined,
          humidity: undefined,
          error: "Without information about " + city + " - "  + country
        })
      }
      else {
        const data = await api_call.json()
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: country,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          error: ""
        })
        console.log(data)
      }
      
    }
    else {
      
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        humidity: undefined,
        error: "Country and city are necessaries"
      })
    }
    
  }
  render() {
    return (
      <div className="App">
        <Jumbotron></Jumbotron>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              
            </div>
            
            <div className="col-md-4">
              <Form getWeather={this.getWeather}></Form>
            </div>
            <div className="col-md-8">
              <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                description={this.state.description}
                humidity={this.state.humidity}
                error={this.state.error}
              ></Weather>
            </div>

          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
