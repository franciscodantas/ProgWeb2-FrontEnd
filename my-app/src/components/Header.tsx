import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <header className="header" onClick={handleLoginClick} style={{ cursor: 'pointer' }}>
      <h1>Quest@CCC</h1>
      <FiLogIn className="login-icon" />
    </header>
  );
};

export default Header;
