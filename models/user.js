const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    name: {
        type: String,
    },
    bookedSlots:
        [
            {
                startTime: {
                    type : String
                },
                endTime: {
                    type : String
                }
            }
        ]
},
    {
        timestamps: true,
    },
)

const User = mongoose.model('users', userSchema)
module.exports = User
