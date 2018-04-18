const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const OrderSchema = new Schema({
  date: String,
  status: String,
  relation: String,
});
const Order = mongoose.model('order', OrderSchema);

module.exports = Order;
