import React, { Component } from 'react';
import axios from 'axios';


export class Autocomplete extends Component {
    constructor(props){
        super(props);
        this.state={
            query:'',
            results:[],
            message:'',
            loading: false,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.cancel='';
        this.renderResult = this.renderResult.bind(this);
        this.handleButton = this.handleButton.bind(this)
        
    }

    //autocomplete input change to auto get req api 
    handleInputChange = (event) => {
        const inputVal = event.target.value;
        console.log(inputVal)
        console.log(this.state)
            if (!inputVal) {
                this.setState({
                    query: inputVal,
                    message:'',
                    results:{}
                })
            }else{
                this.setState({ 
                    query: inputVal, 
                    loading: true, 
                    message: ''  }, ()=> {
                        this.fetchSearchResults(inputVal)
                    } );

            }
    };

    //api call to trefle for plant types and info
    fetchSearchResults(query) {
        const url = `http://localhost:5500/plant/trefle/${query}`;

        //if cancel token exists then call cancel to cancel prev request
        if (this.cancel){
            this.cancel.cancel();
        }

        //then sets up a new token 
        this.cancel = axios.CancelToken.source();
        //and make a new request to the api
        axios.get(url,{cancelToken: this.cancel.token})
            .then((res)=>{
                const noResult = !res.data ? 'No Results' :'';
                const allResults = [];
                //loop through api results and set to state
                for (let i in res.data) {
                    console.log(res.data[i] )
                    let eachItem = {id: res.data[i]['id'], common_name: res.data[i]['common_name']};
                    allResults.push(eachItem);
                }
                this.setState({
                    results: allResults,
                    message: noResult,
                    loading: false
                }, ()=>{
                    console.log('results state set')
                })
            })
            .catch((error)=> {
                if (axios.isCancel(error)){
                    console.log('Request cancelled ' + error )
                }else{
                    console.log('Network Error '+ error )
                }
            })


    }

    renderResult(){
        let {results} = this.state;
        if (results.length) {
            return (
                <div className='autoCompleteRender'>
                    {results.map((result)=>{
                        if (result['common_name']){
                            return(
                                <ul className='apiPlantList'>
                                    <button key={result['id']} onClick={(e)=>this.handleButton(result['common_name'])} >
                                        {result['common_name']}
                                    </button>
                                </ul>
                            )
                        }
                    })}
                </div>
            )
        }
    }

    //callback function to parent component when button is clicked 
    handleButton (val) {
        console.log(val);
        this.props.onChangeValue(val)
    }

    render() {
        return (
            <div>
                <h3>Plant Type</h3>
                <label>
                    <input 
                        type='text'
                        id='search-input'
                        value={this.props.value}
                        placeholder='Search...'
                        onChange={this.handleInputChange}
                    />
                </label>
                <div>
                    {this.renderResult()}
                </div>
                
            </div>
        )
    }
}

export default Autocomplete
