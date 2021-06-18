const express = require('express')
let router = express.Router()

// Getting all
router.get('/', (req, res) => {
    res.json({
        status: 'cool',
        message: 'hello'
    })
})


// Getting one
router.get('/:id', (req, res) => {
    console.log(req.params.id)
})

// Creating one
router.post('/', (req, res) => {
    
})

// Updating one
router.patch('/', (req, res) => {
    
})

// Deleting one
router.delete('/', (req, res) => {
    
})

module.exports = router