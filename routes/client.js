const express = require('express');
const router = express.Router();
const clientController = require("../controllers/client")

router.get("/",clientController.getPage)
module.exports = router;
