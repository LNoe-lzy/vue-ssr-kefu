const express = require('express');

const router = express.Router();

/* eslint-disable */
const WorkOrder = require('../models/workorder');
const Order = require('../models/order');

router.get('/api/getorderlist', (req, res) => {
  Order.find({}, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      errno: 0,
      data,
    });
  })
});

router.get('/api/getworkorderlist', (req, res) => {
  WorkOrder.find({}, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      errno: 0,
      data,
    });
  })
});

router.post('/api/getworkorder', (req, res) => {
  const workOrderId = req.body.workOrderId;
  WorkOrder.findById(workOrderId, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      errno: 0,
      data,
    });
  })
});

router.post('/api/updateworkorder', (req, res) => {
  const data = req.body;
  WorkOrder.update({
    _id: data.workOrderId,
  }, {
    $set: {
      type: data.type,
      city: data.city,
      name: data.name,
      level: data.level,
      date: data.date,
      desc: data.desc,
      status: data.status,
    }
  }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      errno: 0,
      data: null,
    });
  })
});

router.post('/api/newworkorder', (req, res) => {
  const data = req.body;
  const newWorkOrder = new WorkOrder(data);
  newWorkOrder.save((err) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      errno: 0,
      data: null,
    })
  })
})

router.post('/api/relateorder', (req, res) => {
  const data = req.body;
  Order.update({
    _id: data.orderId,
  }, {
    $set: {
      relation: data.workOrderId,
    }
  }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      errno: 0,
      data: null,
    });
  })
});

router.post('/api/unrelateorder', (req, res) => {
  const data = req.body;
  Order.update({
    _id: data.orderId,
  }, {
    $set: {
      relation: '',
    }
  }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      errno: 0,
      data: null,
    });
  })
});

router.post('/api/deleteworkorder', (req, res) => {
  const data = req.body;
  WorkOrder.remove({
    _id: data.workOrderId,
  }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      errno: 0,
      data: null,
    });
  })
});

module.exports = router;
