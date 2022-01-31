// Import Packages
const express = require('express')
const router = express.Router()
// Create POST controller
router.get('/', (req, res) => {
  res.render('results')
})

router.post('/', (req, res) => {
  let results = [
    {
      title: 'JS tutorials',
      description: 'The best JavaScript tutorials in the galaxy!',
      url: 'https://www.w3schools.com',
      links: [
        {
          title: 'JS for Beginners',
          url: 'https://www.w3schools.com/js'
        },
        {
          title: 'JS for the Web',
          url: 'https://www.w3schools.com/js'
        }
      ]
    },
    {
      title: 'JavaScript',
      description: 'The best language!',
      url: 'https://www.developer.mozilla.org',
      links: [
        {
          title: 'JS for life',
          url: 'https://www.w3schools.com/js'
        },
        {
          title: 'JS for the DarkWeb',
          url: 'https://www.w3schools.com/js'
        }
      ]
    },
    {
      title: 'JS pazz',
      description: 'The best song  in the galaxy!',
      url: 'https://www.pinodaniele.com',
      links: [
        {
          title: 'Pino for Beginners',
          url: 'https://www.w3schools.com/js'
        },
        {
          title: 'Pino for the Web',
          url: 'https://www.w3schools.com/js'
        }
      ]
    }
  ]
  results = results.filter(
    e =>
      e.title.toLowerCase().includes(req.body.research.toLowerCase()) ||
      e.description.toLowerCase().includes(req.body.research.toLowerCase())
  )
  console.log(results)
  // res.render('results', { results })
  res.render('results', { results })

  console.log(req.body.research)
})
// Export module
module.exports = router
