//initialize express router
const express =  require('express')

let router = express.Router()

//set default API response
router.get('/', (req, res) => {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    })
});

//Export API routes
module.exports = router