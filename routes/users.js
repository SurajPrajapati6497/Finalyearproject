const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const { check } = require("express-validator");
const { verifyToken } = require("../middleware/auth");


router.post("/register", userControllers.register);
router.post("/login", userControllers.login);
router.get("/random", userControllers.getRandomUsers);
router.delete("/delete", userControllers.deletes);
router.get("/alluser", userControllers.getAllUsers);

router.get("/:username", userControllers.getUser);
router.patch("/:id", verifyToken, userControllers.updateUser);
router.post("/follow/:id", userControllers.follow);
router.delete("/unfollow/:id", userControllers.unfollow);

router.get("/followers/:id", userControllers.getFollowers);
router.get("/following", userControllers.getFollowing);

module.exports = router;
