import React, { Component } from 'react';
import styles from './register.module.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            'fname':'',
            'lname':'',
            'email':'',
            'city':'',
            'country':'',
            'username' : '',
            'password': '',
            'passwordconf':''
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
        const {history} = this.props;
        const user = {
            firstname: this.state.fname,
            lastname: this.state.lname,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            city: this.state.city,
            country: this.state.country
        }
        
        //post request to backend to register user into db 
        axios.post('http://localhost:5500/auth/register',{
            data: user
        }).then((response)=>{
            alert(response.data);
            history.push('/login')
        }).catch((err)=>{
            console.log(err);
        })

    }

    render() {
        return (
            <div className={styles.registerContainer}>
                <form onSubmit={this.handleSubmit} className={styles.forminputscontainer}>
                    <label className={styles.formlabel}>
                        First Name
                        <input
                            className={styles.forminput}
                            type='text'
                            name='fname'
                            onChange={this.handleInputChange}/>
                    </label>
                    <label className={styles.formlabel}>
                        Last Name
                        <input
                            className={styles.forminput}
                            type='text'
                            name='lname'
                            onChange={this.handleInputChange}/>
                    </label>
                    <label className={styles.formlabel}>
                        Email
                        <input
                            className={styles.forminput}
                            type='text'
                            name='email'
                            onChange={this.handleInputChange}/>
                    </label>
                    <div className={styles.locationInput}>
                        <label className={`${styles.formlabelcity} ${styles.formlabel}`}>
                            City
                            <input
                                type='text'
                                className={styles.forminput}
                                name='city'
                                onChange={this.handleInputChange}/>
                        </label>
                        <label className={`${styles.formlabelcountry} ${styles.formlabel}` }>
                            Country
                            <input
                                type='text'
                                name='country'
                                className={styles.forminput}
                                onChange={this.handleInputChange}/>
                        </label>
                    </div>
                   
                    <label className={styles.formlabel}>
                        Username
                        <input
                            type='text'
                            name='username'
                            className={styles.forminput}
                            onChange={this.handleInputChange}/>
                    </label>
                    <label className={styles.formlabel}>
                        Password
                        <input 
                            type='password'
                            name='password'
                            className={styles.forminput}
                            onChange={this.handleInputChange}/>
                    </label>
                    {/* <label className={styles.formlabel}>
                        Confirm password
                        <input 
                            type='password'
                            name='passwordconf'
                            className={styles.forminput}
                            onChange={this.handleInputChange}/>
                    </label> */}
                    <Button variant="outlined" type='submit'color="secondary">
                        Register
                    </Button>
                </form>
            </div>
        )
    }
}

export default Register
