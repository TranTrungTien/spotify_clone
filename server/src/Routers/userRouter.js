const router = require("express").Router();
const user = require("../Controllers/userControlller");

router.post("/", user.insert);

module.exports = router;
