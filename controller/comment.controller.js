const { Comment } = require('../model/comment.model');

exports.get = async (req, res) => {
    try {
        const comments = await Comment.findAll();
        res.json(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getById = async (req, res) => {
    const commentId = req.params.id;
    try {
        const comment = await Comment.findByPk(commentId);
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        res.json(comment);
    } catch (error) {
        console.error('Error fetching comment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.create = async (req, res) => {
    const { user_id, course_id, comment } = req.body;
    try {
        const newComment = await Comment.create({
            user_id,
            course_id,
            comment
        });
        res.status(201).json(newComment);
    } catch (error) {
        console.error('Error creating comment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.update = async (req, res) => {
    const commentId = req.params.id;
    const { user_id, course_id, comment } = req.body;
    try {
        const commentToUpdate = await Comment.findByPk(commentId);
        if (!commentToUpdate) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        commentToUpdate.user_id = user_id;
        commentToUpdate.course_id = course_id;
        commentToUpdate.comment = comment;
        await commentToUpdate.save();
        res.json(commentToUpdate);
    } catch (error) {
        console.error('Error updating comment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.delete =  async (req, res) => {
    const commentId = req.params.id;
    try {
        const commentToDelete = await Comment.findByPk(commentId);
        if (!commentToDelete) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        await commentToDelete.destroy();
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting comment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

