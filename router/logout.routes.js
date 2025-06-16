const express = require('express');
const router = express.Router();

router.post('/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    sameSite: 'Strict',
    secure: process.env.NODE_ENV === 'production', // only clear over HTTPS in prod
  });

  res.json({ message: 'Logged out successfully' });
  
});

module.exports = router;