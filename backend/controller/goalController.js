const getGoals = (req,res)=>{
    res.status(200).json({message:"Get Goals"})
}
const setGoal = (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please Add Text Field')
    }
    res.status(201).json({message:"Set Goal"})
}
const updateGoal = (req,res)=>{
    res.status(200).json({message:`Update Goal ${req.params.id}`})
}
const deleteGoal = (req,res)=>{
    res.status(200).json({message:`Delete Goal ${req.params.id}`})
}


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}