import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GoalDetails from './GoalDetails.js';
// import './goal.css'
const strikeStyle={textDecorationLine: 'line-through'}

const Goal = (props) => {
    console.log('--PROPS IN GOAL', props.goal.completed)
    return (
        <div>
          <Link to={`/details/${ props.goal.goalId }`}>
                {props.goal.completed === 0 ? 
                    <li>{props.goal.name}</li> : <li style={strikeStyle}>{props.goal.name}</li>}
            </Link>
        </div>
        //onClick go to link 
            //link to details view 
                //pass down props.goal
    )

    
}

export default Goal;