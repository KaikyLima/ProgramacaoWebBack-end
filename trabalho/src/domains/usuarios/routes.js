const { Router } = require("express");
const {
    postUser
} = require("./controllers")

const router = Router();

router.post("/postUser", postUser)



module.exports = router;
