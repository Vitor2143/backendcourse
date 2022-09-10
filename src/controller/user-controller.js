'use strict'

const repository = require ('../repository/user-repository.js')

exports.getAllUsers = async(req, res, next) =>{
    try {
        let dbReturn = await repository.getAll();
        res.status(200).send(dbReturn);
    } catch (e) {
        res.status(500).send({
            message:'Ops! Algo deu errado', error:e
          }
        );
        
    }
};



exports.addUser = async(req, res, next) =>{
    try {
        let dbReturnUser = await repository.create(req.body);
        res.status(200).send(dbReturn);
    } catch (e) {
        res.status(500).send({
            message:'Ops! Algo deu errado', error:e
          }
        );
        
    }
};


