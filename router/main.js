const { Router } = require("express");
const router = Router();
const {
  mainGetRouter,
  mainPostRouter,
  postapplicationRouter,
} = require("../controller/main");
router.get("/", mainGetRouter);
router.post("/courses", mainPostRouter);
router.post("/application", postapplicationRouter);
module.exports = router;
