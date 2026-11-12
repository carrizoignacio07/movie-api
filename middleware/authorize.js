export const authorizeModification = (req, res, next) => {
    const targetUserId = Number(req.params.userId);
    const currentUserId = Number(req.user.id);

    if (
        req.user.role === "parent" ||
        (req.user.role === "child" && targetUserId === currentUserId)
    ) {
        return next();
    }

    return res.status(403).json({ error: "Access denied" });
};