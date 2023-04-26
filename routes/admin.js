const express = require('express');
const router = express.Router();
const adminController = require("../controllers/admin");
const auth = require("../middlewares/auth")

router.get("/",auth.checkAuth,adminController.renderModifyDatePage)
router.get("/storic",auth.checkAuth,adminController.renderStoricPage)

router.post("/add-place",auth.checkAuth,adminController.createPlace)
router.post("/",auth.checkAuth,adminController.selectedPlace)
router.post("/:id",auth.checkAuth,adminController.changeDate)

module.exports = router
