import mongoose, { Schema } from "mongoose";

const newSchema = new Schema({
    fecha: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true
})

export default mongoose.model("Calendar", newSchema)