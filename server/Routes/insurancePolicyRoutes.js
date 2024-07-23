const router = require("express").Router();
const controller = require("../Controllers/insurancePolicy");
const middleware = require("../middleware");

router.get(
    "/get-all-policies",
    middleware.stripToken,
    middleware.verifyToken,
    controller.FetchPolicies
);

module.exports = router;
