import React, { Component } from 'react'

class Weather extends Component{

    render(){
        return (
            <div className="card ">
                <div className="card-header bg-warning text-white">
                    {this.props.country && this.props.city && <span><i className="fa fa-globe"></i>  {this.props.city} - {this.props.country}</span>}
                </div>
                <div className="card-body">
                    {this.props.temperature && <p className="lead"><i className="fa fa-thermometer-empty"></i> Current Temperature: {this.props.temperature}</p>}
                    {this.props.description && <p>Description: {this.props.description}</p>} 
                    { this.props.error && <p className="lead text-danger"> {this.props.error} </p> }
                    {this.props.humidity && <p className="lead text-info">Humidity: {this.props.humidity} </p>}
                </div>
            </div>
        )
    }
}


export default Weather