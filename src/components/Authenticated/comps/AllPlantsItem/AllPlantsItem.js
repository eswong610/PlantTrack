import React, { Component } from 'react';
import styles from './allplantitem.module.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

export class AllPlantsItem extends Component {
    render() {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<span class="material-icons">expand_more</span>}>
                        <div className={styles.expansionSummary}>
                            <h3>{this.props.plantType}</h3>
                            <p><i>{this.props.scientificName}la tomate</i></p>
                            <p>Planted on : {this.props.datePlanted} </p>
                        </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className={styles.expansionDetails}>
                        <p>Last Watered: {this.props.lastWatered}</p><br/>
                        <p>Last Fertilized : {this.props.lastFertilized}</p>
                        <button className={styles.optionsBtn}><span class="material-icons">delete</span></button>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>


            //Good and going tomatooeess
            // <div className={styles.bigContainer}>
            //     <div className={styles.textDetails}>
            //         <h3>{this.props.plantType} </h3>
            //         <p>Planted on : {this.props.datePlanted} </p>
            //     </div>
            //     <div className={styles.containerOptions}>
            //         <button className={styles.optionsBtn}><span class="material-icons">delete</span></button>
            //         <button className={styles.optionsBtn}><span class="material-icons">expand_more</span></button>
            //     </div>
            // </div>
        )
    }
}

export default AllPlantsItem
