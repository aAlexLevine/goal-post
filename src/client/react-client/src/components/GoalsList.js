import React from 'react';
import Goal from './Goal.js';

const GoalsList = (props) => {
  console.log('props.goals in Goal.js',props)
  return (
    <div id="goals">
      <h1>My Goals</h1>

      <ol>
        {props.arrayOfGoals.map((goal, i)=> (
          <Goal key={i} goal={goal}/>
        ))}     
      </ol>

    </div>
  );
}

export default GoalsList;