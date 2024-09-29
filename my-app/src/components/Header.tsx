import React from 'react';
import { FiLogIn } from 'react-icons/fi';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Quest@CCC</h1>
      <FiLogIn className="login-icon" />
    </header>
  );
};

export default Header;