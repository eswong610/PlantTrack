import React, { Component } from 'react';

import ProfileCorner from './comps/ProfileCorner/ProfileCorner';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Todo from './comps/Todo/Todo';
import styles from './authenticated.module.css';
import Modal from 'react-modal';
import AddNewPlant from './comps/AddNewPlant/AddNewPlant';
import AllPlants from './comps/AllPlants/AllPlants'

Modal.setAppElement('#root')

class Authenticated extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalisOpen: false,
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal = () => {
        this.setState({
            modalisOpen: true,
        })
    }

    closeModal = () => {
        this.setState({
            modalisOpen: false,
        })
    }

    

    render() {
        return (
            <div className={styles.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12} className={styles.header}>
                            <svg className= {styles.logo} width="290" height="256" viewBox="0 0 290 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M290 138.5C290 203.393 225.081 256 145 256C64.9187 256 0 203.393 0 138.5C0 73.6065 64.9187 21 145 21C225.081 21 290 73.6065 290 138.5Z" fill="#DC4D2E"/>
                                <path d="M144.5 0L169.533 29.7123H250.543L185.005 48.0755L210.038 77.7877L144.5 59.4245L78.9619 77.7877L103.995 48.0755L38.4572 29.7123H119.467L144.5 0Z" fill="#3F8E23"/>
                                <path d="M145 18L162.288 35.6201L218.231 35.6201L172.972 46.5099L190.259 64.1299L145 53.2401L99.7406 64.1299L117.028 46.5099L71.7687 35.6201L127.712 35.6201L145 18Z" fill="#4E9D41"/>
                                <path d="M214.119 209.772C234.412 200.918 247.762 189.677 257.392 165.689C267.021 141.701 271.501 177.626 248.516 204.921C225.53 232.216 193.827 218.626 214.119 209.772Z" fill="#E4A2A2"/>
                                <path d="M154 37.5C154 39.433 150.194 41 145.5 41C140.806 41 137 39.433 137 37.5C137 35.567 140.806 34 145.5 34C150.194 34 154 35.567 154 37.5Z" fill="#007D32"/>
                            </svg>
                        <Button className={styles.logoutBtn}variant="outlined" color="default">Logout</Button>
                    </Grid>
                    <Grid item xs={8}>
                        <Todo />
                    </Grid>
                    <Grid item xs={4}>
                        {/* profile corner needs dynamic images too */}
                        <ProfileCorner loggedInUser = {this.props.location.state.username} userLevel={this.props.location.state.level}/>
                        <Button onClick={this.openModal} variant="outlined" color='secondary' >New Plant</Button>
                        <Modal
                            className={styles.newplantmodal}
                            isOpen={this.state.modalisOpen}
                            onRequestClose={this.closeModal}

                            contentLabel='Addplantmodal'
                        >
                            <AddNewPlant/>
                            <button onClick={this.closeModal}>Close</button>
                        </Modal>
                        <AllPlants /> 

                    </Grid>
                    
                    {/* <Grid item xs={4}>
                       
                    </Grid> */}
                </Grid>
                
            </div>
        )
    }
}

export default Authenticated
