const path = require('path')
const router = require('express').Router()


    router.get('/exercise', (request, response) => {
        console.log('exercise route')
        response.sendFile(path.join(__dirname, '../public/exercise.html'))
    })

    router.get('/stats', (request, response) => {
        response.sendFile(path.join(__dirname, '../public/stats.html'))
    })
module.exports = router