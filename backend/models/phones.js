const mongoose=require('mongoose')
const phoneSchema=new mongoose.Schema({
     name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  camera: String,
  battery: String,
  charging: String,
  display: String,
  processor: String,
  rating: Number,
  imageUrl: String
})
module.exports = mongoose.model('Phone', phoneSchema);