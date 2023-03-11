const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Tools Found");
// });
// router.post("/", (req, res) => {
//   res.send("tools created success");
// });

router
  .route("/")
  .get((req, res) => {
    res.send("Tools Found");
  })
  .post((req, res) => {
    res.send("tools created success");
  });

module.exports = router;
