function isAuthenticated(req, res, next) {
  if (req.session && req.session.userId) {
    // User is authenticated
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized. Please log in.' });
  }
}

module.exports = isAuthenticated;