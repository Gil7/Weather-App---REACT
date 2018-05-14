import React, {Component} from 'react'

class Form extends Component{
    
    render (){
        return(
            <div className="card">
                <div className="car-header bg-warning">
                    <p className="lead pt-3 text-white">Look for</p>
                </div>
                <form onSubmit={this.props.getWeather} className="card-body">
                    <div className="form-group">
                        <label htmlFor="city"> City</label>
                        <input
                            name="city"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country"> Country</label>
                        <input
                            name="country"
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-success"> <i className="fa fa-eye"></i>Ver clima</button>
                </form>
            </div>
        )
    }
}
export default Form