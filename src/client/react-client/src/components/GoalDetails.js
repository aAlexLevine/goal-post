import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class GoalDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goalTitle: '',
            goalDescripton: '',
            goalStatus: '',
            id: props.match.params.id,
            redirect: false
        }
        console.log('props in goal details', props)
        // [{name: '', desriptions:'', completed: ''}],
        //console.log('goaldetails in state',this.state.goalDetails)
        console.log('props in GoalDetails', props.match.params.id)
        this.handleClick = this.handleClick.bind(this)
    }

componentDidMount(){
    axios.get(`/goals/${this.state.id}`)
    .then((response)=>{
        this.setState({
            goalTitle: response.data[0].name,
            goalDescription: response.data[0].descriptions,
            goalStatus: response.data[0].completed
        }) 
        console.log('goal details retrieved by goal ID')
        console.log('response.data',response.data)
    
    })
    .catch((error)=>{
        console.log('error in Goal Details', error)
    })
}

handleClick() {
    //axios.get update complete
    //redirect to goals
    console.log('--------')
    axios.get(`/goals/update/${this.state.id}`)
    console.log('client updated goal status in goalDetails.js')
    this.props.updateGoals()
    this.setState({redirect: true})

}

 render(){       
   if(this.state.redirect){
       return <Redirect to='/goals'/>
   }
    return(
        <div>
            <h1>GOAL DETAILS</h1>
            
            <h2>Goal Title</h2>
                <p>{this.state.goalTitle}</p>  
            <h2>Description</h2> 
                <p>{this.state.goalDescription}</p>
            <h2>Mark complete</h2>
                <p>{this.state.goalStatus}</p>
                <button onClick={this.handleClick}>Click to mark complete!</button>
        </div>    
            )
    }
}   
export default GoalDetails;