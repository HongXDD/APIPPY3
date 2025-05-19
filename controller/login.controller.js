const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../model/user.model');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // 1. Find user by email
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // 2. Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // 3. Create JWT token
        const token = jwt.sign(
            { id: user.id, name: user.name, email: user.email ,profile_picture:user.profile_picture },
            'jwt-secret-key',
            {expiresIn: '1h'}
        );

        // 4. Set cookie securely
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // only over HTTPS in prod
            sameSite: 'Strict',
            maxAge: 60 * 60 * 1000 // 1 hour
        });

        // 5. Send success response (without token, since it's in the cookie)
        res.json({
            message: 'Login successful',
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                profile_picture: user.profile_picture
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
