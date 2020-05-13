const router = require("express").Router()
const bookController = require("../../controller/bookController")
router.route("/").get(bookController.findAll).post(bookController.create)
router.route("/:id").get(bookController.findById).put(bookController.upDate).delete(bookController.delete)
module.exports = router
