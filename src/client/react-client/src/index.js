import React from 'react';
import ReactDOM from 'react-dom';
import GoalsList from './components/GoalsList.js';
import GoalsForm from './components/GoalsForm.js';
import GoalDetails from './components/GoalDetails.js';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      goals: [],
      user: 'alice'
    }
  this.updateGoals = this.updateGoals.bind(this) 
  }
 


  componentDidMount() {
    axios.get('/goals', {
      params: {
        name: this.state.user
      }
    }).then((response)=> {
        this.setState({goals: response.data}),
        console.log('Goals Mounted:', response.data)
    })
      .catch((error)=>{
        console.log('Goals did not Mount', error)
      })
  }

  updateGoals() {
    axios.get('/goals', {
      params: {
        name: this.state.user
      }
    }).then((response)=> {
        this.setState({goals: response.data}),
        console.log('Goals Mounted:', response.data)
    })
      .catch((error)=>{
        console.log('Goals did not Mount', error)
      })
  }
  

  render() {
    return (
<Router>
<div>
  <ul>
    <li>
      <Link to="/">Home/ Log-in / Sign-Up</Link>
    </li>
    <li>
      <Link to="/goals">My Goals</Link>
    </li>
    <li>
      <Link to="/newgoals">Set New Goals</Link>
    </li>
    {/* <li>
      <Link to="/details">Goal Detail View</Link>
    </li> */}
  </ul>

  <hr />

  {/* <Route exact path="/" component={()=>(<App/>)} /> */}
    <Route path="/goals" render={()=>(<GoalsList arrayOfGoals={this.state.goals}/>)} />
    <Route path="/newgoals" render={()=>(<GoalsForm user={this.state.user} updateGoals={this.updateGoals}/>)} />
    <Route path="/details/:id" render={(props)=>(<GoalDetails {...props} updateGoals={this.updateGoals}/>)} />
</div>
</Router>
    
   
    )
  
  }    
}


ReactDOM.render(<App/>, document.getElementById('app'));

{/* <div>
<h1>Goalposts</h1>
 <GoalsList arrayOfGoals={this.state.goals}/>
 <GoalsForm user={this.state.user} updateGoals={this.updateGoals}/>
</div> */}
// const Ro = () => (

