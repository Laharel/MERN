import React, { Component } from 'react'

export default class PersonCard extends Component {
    render() {
        const {firstName, lastName, age, hairColor} = this.props
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        )
    }
}
