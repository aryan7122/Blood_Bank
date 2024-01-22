const express = require('express');
const router = require('./routers/testRoutes.js');

const app = express()
app.use('/api/v1', router)
const PORT = 8080;
app.get('/', (req, res) => {
    res.status(200).json('Blood Bank App Backend is Running ...')
})
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})