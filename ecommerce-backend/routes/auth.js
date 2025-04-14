const express = require("express");
const passport = require("passport");
const router = express.Router();

// Initiate login
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Callback
router.get("/google/callback",
  passport.authenticate("google", { failureRedirect: "/login", session: false }),
  (req, res) => {
    const { token, user } = req.user;
    // Redirect or respond with token
    res.redirect(`http://localhost:3000/login/success?token=${token}`);
  }
);

module.exports = router;
