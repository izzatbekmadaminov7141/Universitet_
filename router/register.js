const { Router } = require("express");
const router = Router();
const {
  registerGetRouter,
  registerPostRouter,
} = require("../controller/register");
// get
router.get("/", registerGetRouter);
// post
router.post("/", registerPostRouter);
module.exports = router;
