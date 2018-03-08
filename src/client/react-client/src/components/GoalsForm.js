import React from 'React';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

// const GoalForm = () => {
class GoalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name: '',
      descriptions:'',
      completed: false,
      user: this.props.user,
      redirect: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  }

  handleSubmit(e) {
    //send values to index.js
    console.log('handleSubmit')
    e.preventDefault()
    
    let form = {
      name: this.state.name,
      descriptions: this.state.descriptions,
      completed: this.state.completed,
      user: this.state.user}
      console.log('submit on client')
      
      axios.post('/goals', { form })
        .then((response)=> {
          console.log('form submited on cient', response)
          this.setState({name: '', descriptions:'', redirect: true})
          this.props.updateGoals()
       
        })
        .catch((error)=>{
          console.log('error, form not submitted on client', error)
        })
        //redirect to /
        
    }

 
render() {
  if (this.state.redirect) {
    return <Redirect to='/goals'/> 
  }
  return (
      <div>
        {/* {this.state.redirect ? <Redirect to='/'/> : } */}
        <h1>Goal Form</h1>
          <form name="goal-form" onSubmit={(e)=> this.handleSubmit(e)}>
            <h2>{this.state.user}'s New Goals</h2>
            
            <h3>Goal Title</h3><br/>
            <input name="name" value={this.state.name} onChange={this.handleChange}></input>
            <br/>
            
            <h3>Goal Description</h3><br/>
            <input name="descriptions" value={this.state.descriptions} onChange={this.handleChange}></input>
            <button type="submit">submit </button>
            {/*
            TODO:
              - Create inputs for a Goal title, due date and description
            */}
          </form>
      </div>
    )
  }
}

export default GoalForm; 