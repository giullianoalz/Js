// En src/Components/Layout/index.jsx
// Este es un ejemplo básico. Tu Layout podría ser más complejo.

import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='layout-container'>
      {children}
    </div>
  );
};

export default Layout;