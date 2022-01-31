const mongoose = require('mongoose')

// Create the results moodel
module.exports = mongoose.model('results', {
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  links: [
    {
      title: String,
      url: String
    }
  ]
})

//è possibile ampliare i dettagli di ogni campo (es: title) creando un object
//per il campo
// //es:
// title: {
// 	type: String;
// 	required: true,
// 	default:
// }
