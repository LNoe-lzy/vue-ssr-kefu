const express = require('express');

const router = express.Router();
const data = require('../data.json');

/* eslint-disable */
router.get('/api/getworkorderlist', (req, res) => {
  return res.json({
    errno: 0,
    data: data.workorderlist,
  });
});

router.get('/api/getnav', (req, res) => {
  return res.json({
    errno: 0,
    data: data.nav,
  });
});

module.exports = router;
