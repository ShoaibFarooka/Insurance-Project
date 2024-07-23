const router = require("express").Router();
const controller = require("../Controllers/insuranceClaim");
const middleware = require("../middleware");

router.get(
    "/get-user-claims",
    middleware.stripToken,
    middleware.verifyToken,
    controller.FetchUserClaims
);

router.post(
    "/create-claim",
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreateClaim
);

router.put(
    "/update-claim/:claimID",
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpateClaim
);

router.delete(
    "/delete-claim/:claimID",
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteClaim
);

module.exports = router;
