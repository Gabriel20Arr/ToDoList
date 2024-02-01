import Calendar from "../Models/calendar.models.js"

export const calendarPost = async (req, res) => {
    try {
        const { fecha } = req.body;

        // Verifica si req.task y req.user están disponibles y contienen la información correcta
        // if (!req.task) {
        //     return res.status(400).json({ message: "Task or user information is missing." });
        // }

        const newCalendar = new Calendar({
            fecha,
            user: req.user.id
        });

        const calendarSaved = await newCalendar.save();

        res.json(calendarSaved);
    } catch (error) {
        console.error("Error during calendar post:", error);
        res.status(500).json({ message: "Error during calendar post", error: error.message });
    }
};


export const getCalendar = async (req, res) => {
    const _id = req.params.id

    const FoundCalendarId = await Calendar.findById(_id).populate("user").populate("task")
    if(!FoundCalendarId) return res.status(400).json({message: "Calendar not found"})
    
    res.json(FoundCalendarId)
}

export const getDelete = async (req, res) => {
    const _id = req.params.id

    const FoundCalendarId = await Calendar.findByIdAndDelete(_id).populate("user")
    if(!FoundCalendarId) return res.status(400).json({message: "Calendar not found"})
    
    res.json(FoundCalendarId)
}

export const putCalendar = async (req, res) => {
    const id = req.params.id;

    const updateCalendar = await Calendar.findByIdAndUpdate(id, req.body, {
        new: true
    })

    if(!updateCalendar) return res.status(400).json({message: "Calendar not found"})
    res.json(updateCalendar)
}