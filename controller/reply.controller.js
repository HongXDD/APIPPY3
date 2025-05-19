exports.get = async (req, res) => {
    try {
        const replies = await Reply.findAll();
        res.json(replies);
    } catch (error) {
        console.error('Error fetching replies:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getById = async (req, res) => {
    const replyId = req.params.id;
    try {
        const reply = await Reply.findByPk(replyId);
        if (!reply) {
            return res.status(404).json({ error: 'Reply not found' });
        }
        res.json(reply);
    } catch (error) {
        console.error('Error fetching reply:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.create = async (req, res) => {
    const { user_id, comment_id, reply } = req.body;
    try {
        const newReply = await Reply.create({
            user_id,
            comment_id,
            reply
        });
        res.status(201).json(newReply);
    } catch (error) {
        console.error('Error creating reply:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.update = async (req, res) => {
    const replyId = req.params.id;
    const { user_id, comment_id, reply } = req.body;
    try {
        const replyToUpdate = await Reply.findByPk(replyId);
        if (!replyToUpdate) {
            return res.status(404).json({ error: 'Reply not found' });
        }
        replyToUpdate.user_id = user_id;
        replyToUpdate.comment_id = comment_id;
        replyToUpdate.reply = reply;
        await replyToUpdate.save();
        res.json(replyToUpdate);
    } catch (error) {
        console.error('Error updating reply:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.delete = async (req, res) => {
    const replyId = req.params.id;
    try {
        const reply = await Reply.findByPk(replyId);
        if (!reply) {
            return res.status(404).json({ error: 'Reply not found' });
        }
        await reply.destroy();
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting reply:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
