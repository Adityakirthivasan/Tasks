import React from 'react';

const Author = (Wrap) => {
  return ({ user, ...props }) => {
    const allowedRoles = ['student', 'admin']; 

    if (!user || !allowedRoles.includes(user.role)) {
      return <p>Access denied...</p>;
    }

    return <Wrap user={user} {...props} />;
  };
};

export default Author;
