import React, { Component } from 'react'

export default class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state={
            new_age: this.props.age
        }
    }

    incAge = () => {
        this.setState({new_age: this.state.new_age+1})
    }
    render() {
        const {firstName, lastName, hairColor} = this.props
        const {new_age} = this.state
        // const {age} = this.props
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>age: {new_age}</p>
                {/* <p>age: {age}</p> */}
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.incAge}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}
