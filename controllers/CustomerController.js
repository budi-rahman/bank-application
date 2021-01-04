const { Account, Customer } = require('../models')

class CustomerController {


    static Customer(req,res){

        Customer.findAll({order : [
            ['fullName', 'ASC']]
        })
        .then(data =>{
            res.render('customers', {data})
        })
        .catch(error =>{
            res.send(err)
        })

    }

    static CustomerRegister(req,res){

    }

    static CustomerRegisterPost(req,res){

    }

    static CustomerProfile(req,res){

    }

    static CustomerProfilePost(req,res){

    }


}

module.exports = CustomerController