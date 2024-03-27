export const isAdmin = ({ req }) => req.user && req.user.role === 'admin';
