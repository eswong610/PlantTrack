import React, { Component } from 'react'
import AllPlantsItem from '../AllPlantsItem/AllPlantsItem';
import axios from 'axios';

export class AllPlants extends Component {
    constructor(props){
        super(props);
        this.state = {
            dbPlants : []
        }
        // this.showPlants = this.showPlants.bind(this);        
        this.getItems = this.getItems.bind(this)
    }

    componentDidMount() {
        this.getItems();
    }

    // to show plants on page
    // showPlants = () => {
    //     this.state.dbPlants.map((item, key)=>{
    //         return (<p key={item.id}>Plant Type: {item.type} <br/> Date Planted : {item.datePlanted}</p>)
        
    //     })
    // }

    getItems = () =>{
        axios.get('http://localhost:5500/bob/allplants')
            .then(res=>{
               const data = Object.keys(res.data)
                this.setState({
                    dbPlants: res.data
                })
               console.log(this.state.dbPlants)
               console.log('from this plants' + this.plants)
               
                    
            })
            
    }

    render() {
        return (
            <div>
               <h1>All Plants </h1>
               <p> {this.state.dbPlants.map((item, key)=>{
                   return (<AllPlantsItem plantType={item.plantType} datePlanted={item.datePlanted} lastWatered={item.lastWatered} lastFertilized = {item.lastFertilized}/>)
                //    return (<p key={item.id}>Plant Type: {item.type} <br/> Date Planted : {item.datePlanted}</p>)
               })} </p>
               
            </div>
        )
    }
}

export default AllPlants

