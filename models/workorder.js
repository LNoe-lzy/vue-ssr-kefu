const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const WorkOrderSchema = new Schema({
  type: String,
  city: String,
  name: String,
  level: String,
  date: String,
  desc: String,
  status: String,
});
const WorkOrder = mongoose.model('workorder', WorkOrderSchema);

module.exports = WorkOrder;
