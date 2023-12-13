var express = require("express");
var router = express.Router();

router.post("/dadosEmpresa", function (req, res) {
    dashboardController.dadosEmpresa(req, res);
})

module.exports = router;