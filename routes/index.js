const router = require('express').Router()
const CustomerController = require('../controllers/CustomerController')
const AccountController = require('../controllers/AccountController')


router.get('/', CustomerController.Customer)
router.get('/customers', CustomerController.Customer)
router.post('/customers/register', CustomerController.CustomerRegisterPost)
router.get('/customers/register', CustomerController.CustomerRegister)
router.get('/customers/:idCustomers/editProfile', CustomerController.CustomerProfile)
router.post('/customers/:idCustomers/editProfile', CustomerController.CustomerProfilePost)
router.get('/customers/:idCustomers/accounts', AccountController.Account)
router.post('/customers/:idCustomers/accounts', AccountController.AccountPost)
router.get('/customers/:idCustomers/accounts/:idAccount/transfer', AccountController.Transfer)
router.post('/customers/:idCustomers/accounts/:idAccount/transfer', AccountController.TransferPost)


module.exports = router
