import React, { Component } from 'react'
import Title from './Title'
class Jumbotron extends Component{

    render(){
        return (
            <div className="jumbotron jumbotron-fluid custom-bg" >
                <Title></Title>
            </div>
        )
    }
}
export default Jumbotron