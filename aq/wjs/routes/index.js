var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('aq-aqbz');
});
router.get("/cg",function(req,res,next){
  res.render("aq-cg");
});
router.get("/app",function(req,res,next){
  res.render("aq-app");
});

router.get("/user",function(req,res,next){
  res.render("aq-user-body");
});

module.exports = router;
