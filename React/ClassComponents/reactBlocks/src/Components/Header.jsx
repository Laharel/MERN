import React, { Component } from 'react'
import styles from './components/Header.module.css';

export default class Header extends Component {
    render() {
        return <button className={ styles.Header }></button>;
    }
}