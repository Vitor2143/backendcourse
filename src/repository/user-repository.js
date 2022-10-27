'use strict'

const mongoose = require('mongoose');
require('../models/user');
const User = mongoose.model('User');
const projection = '_id name email creationDate';

exports.getAll = async() => {
    return await User.find({status:true})
;}

exports.create = async(data) => {
    let user = new User(data);
    return await user.save();
}

exports.update = async(id, data) => {
    
    let userUpdated = await User.findByIdAndUpdate(id, {$set:
    {
        name: data.name,
        email: data.email,
        password : data.password,
        status: data.status
        }
    });
    
}

exports.delete = async(id, data) => {
    
    return await User.findOneAndDelete({_id: id});
}

exports.deleteLogic = async(id, data) => {
    console.log (data);
    return await User.findOneAndDelete(id, {
        $set: {
            status: false
        }
    });
}

exports.autenticate = async(data) => {
    console.log(json.stringfy(data));
        return await User.findOne(
            {
                email: data.email,
                password: data.password
            }
        );
}