import Task from "../Models/task.model.js"

export const getTasks = async (req, res) => {
    const FoundTasks = await Task.find({
        user: req.user.id
    }).populate("user")
    if(!FoundTasks) return res.status(401).json({message: "Task not found"})
    
    res.json(FoundTasks)
}

export const postTask = async ( req, res ) => {
    const { id, title, description, date } = req.body;

    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id
    })

    const taskSave =  await newTask.save()

    res.json(taskSave)
}

export const getTask = async (req, res) => {
    const _id = req.params.id

    const FoundTaskId = await Task.findById(_id).populate("user")
    if(!FoundTaskId) return res.status(400).json({message: "Task not found"})
    
    res.json(FoundTaskId)
}

export const deleteTask = async (req, res) => {
    const _id = req.params.id;

    const FoundTaskId = await Task.findByIdAndDelete(_id)
    if(!FoundTaskId) return res.status(400).json({message: "Task not found"})

    res.json({message: "Task deleted"})
}

export const putTask = async (req, res) => {
    const _id = req.params.id;

    const updateTask = await Task.findByIdAndUpdate(_id, req.body, {
        new: true
    })

    if(!updateTask) return res.status(400).json({message: "Task not found"})
    res.json(updateTask)
}