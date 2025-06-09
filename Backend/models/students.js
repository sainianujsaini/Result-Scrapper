import mongoose from 'mongoose';
const StudentSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    roll:{
        type: String,
        required: true
    },
    branch:{
        type : String,
        required: true
    },
    cgpa:{
        type: Number,
        required: true
    }

});

export default mongoose.model("Student", StudentSchema);