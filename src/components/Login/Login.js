import React, { Component } from 'react'
import styles from './login.module.css'
import Button from '@material-ui/core/Button'
import axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            'username' : '',
            'password': ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        const {username, password} = this.state;
        const {history} = this.props;
        if (username == 'bob' && password == 'pass') {
            this.props.history.push({
                pathname:'/dashboard',
                state:{
                    username:'rob',
                    level: 'GreenBean'
                }
            })
            // history.push('/dashboard')
        }
        //FUTURE LOGIN TODO 
        // axios.get('http://localhost:5500/auth/login')
        //     .then(res=>{
        //        alert('From site ' + res.data)
        //     })
        
        
    }
    render() {
        return (
            <div className={styles.loginContainer}>
                <form onSubmit={this.handleSubmit} className={styles.formContainer}>
                    <label className={styles.formlabel}>
                        Username
                        <input
                            className={styles.forminput}
                            type='text'
                            name='username'
                            onChange={this.handleInputChange}/>
                    </label>
                    <label className={styles.formlabel}>
                        Password
                        <input
                            className={styles.forminput} 
                            type='password'
                            name='password'
                            onChange={this.handleInputChange}/>
                    </label>
                    <Button variant="outlined" type='submit'color="secondary">
                        Login
                    </Button>
                </form>
            </div>
        )
    }
}

export default Login
