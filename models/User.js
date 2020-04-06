const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    joinDate:{
        type:Date(),
        default:true
    },
    joinDate:{
        type:Date,
        default:true
    },
    favorites:{
        type:[Schema.Types.ObjectId],
        ref:'Recipe'
    }
})

// module.exports = mongoose.model('User', UserSchema )

const UserModel = mongoose.model('User', UserSchema );
module.exports = UserModel