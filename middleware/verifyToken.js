const jwt = require('jsonwebtoken');

verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: No token' });
    }

    try {
        const decoded = jwt.verify(token, 'jwt-secret-key');
        req.user = decoded; // attach user info to req
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
};

module.exports = verifyToken;

