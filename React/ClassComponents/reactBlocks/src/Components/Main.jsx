import React, { Component } from 'react'
import styles from './components/Main.module.css';

export default class Main extends Component {
    render() {
        return <button className={ styles.Main }>{ this.props.children }</button>;
    }
}