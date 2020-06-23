import React, { Component } from 'react';
import styles from './profilecorner.module.css';

class ProfileCorner extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.content}>
                    <h3 className={styles.text}>{this.props.loggedInUser}</h3>
                    <p className={styles.text}>{this.props.userLevel}</p>
                </div>
                <img className={styles.ppimg} src='https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=611&q=80' alt='ppimg'/>
            </div>
        )
    }
}

export default ProfileCorner
