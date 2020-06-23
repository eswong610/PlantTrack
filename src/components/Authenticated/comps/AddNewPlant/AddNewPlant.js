import React, { Component } from 'react';
import styles from './addnewplant.module.css';
import Button from '@material-ui/core/Button';
import {MuiPickersUtilsProvider,DatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios';
import Autocomplete from './Autocomplete'

class AllPlants extends Component {
    constructor(props){
        super(props)
        this.state= {
            type : '',
            datePlanted:'',
            selectedDate: new Date(),
            


        }
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAutoInputChange= this.handleAutoInputChange.bind(this)
        
    }

    handleDateChange = (date) => {
        this.setState({
            selectedDate: date
        })
      };
    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        console.log('this is from og ' + this.state.type)
        this.setState({
            [name] : value
        })
    }

    //handles child input (autocomplete ) and sets their input to state
    handleAutoInputChange(plant) {
        this.setState({
            type: plant
        })
    }

  

    handleSubmit(event){
        event.preventDefault();
        console.log(`i planted a ${this.state.type} on ${this.state.datePlanted}, selectedDate = ${this.state.selectedDate}`)
        //api to trefle.io for plant info
        // for clientside apps - get jwt token 
        //curl -i -X POST "https://trefle.io/api/auth/claim?token=N3ppT3I4aDYvOEtPdXArVlhnamZ0dz09&origin=fuse2020.herokuapp.com"
        //post to server and add to db
        let newplant = {
            id: this.state.plantid,
            type: this.state.type,
            datePlanted: this.state.selectedDate
        }
        axios.post('http://localhost:5500/addnewplant', {
            data: newplant
            })
            .then(()=>{
                console.log('New plant added to your list')
            })
            .catch((err)=>{
                console.log('Plant not added ' + err.message)
            })
    }

    

    render() {
        return (
            <div>
                <h1>New Plant</h1>
                <h5>Add a new plant to your Garden </h5>
                <form onSubmit={this.handleSubmit} className={styles.forminputscontainer}>
                        {/* <label className={styles.formlabel}>
                            Plant Type
                            <input
                                className={styles.forminput}
                                type='text'
                                name='type'
                                onChange={this.handleInputChange}/>
                        </label> */}

                        <Autocomplete type={this.state.type} onChangeValue={this.handleAutoInputChange}/> 
                        {/* onChangeValue needsto get type from autcompelte */}

                    {/* <label className={styles.formlabel}>
                        
                        <input
                            className={styles.forminput}
                            type='text'
                            name=''
                            onChange={this.handleInputChange}/>
                    </label> */}
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <label className={styles.formlabel}>
                        Date Planted
                        <DatePicker value={this.state.selectedDate} onChange={this.handleDateChange} />
                        </label>
                    
                    </MuiPickersUtilsProvider>
                    
                    <Button variant="outlined" type='submit'color="secondary">
                        Add Plant
                    </Button>
                </form>
            </div>
        )
    }
}

export default AllPlants
