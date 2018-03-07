var db = require('./db');

var Goal = {};

Goal.findAllGoalsByUser = function(user) {
    return db('goals').where({user: user}).select('*')
        .then(function(data) {
            return data;
        })
        .catch(function(err) {
            console.log('findAllGoalsbyUer', err)
        })
}

Goal.addGoal = function(goal) {
    var insert1 = {name: goal.name, descriptions: goal.description, completed: goal.completed, user: goal.user}
    return db.insert(insert1).into('goals')
        .then(function (id) {
            console.log('inserted', id)
        })
        .catch(function(err) {
            console.log('addGoal', err)
        })
}


Goal.getGoalById = function(goalId) {
    return db('goals').where({ goalId: goalId }).select('*')
        .then(function(goalId) {
            return goalId;
        })
        .catch(function(err) {
            console.error(err)
        });
};



Goal.updateGoalById = function(goalID) {
    
}


//select all goals where user equals req.body.user

module.exports = Goal;
