// Import Packages
const express = require('express')
const router = express.Router()
// Create POST controller
router.post('/', (req, res) => {
  res.send('This is the Result Page')
})
// Export module
module.exports = router
