// Button.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled.button`
background-color: ${(props) => props.color || '#378b0a'};
  color: #ffffff;
  padding: 10px 30px;
  margin: 5px;
  width: ${(props) => props.width || '200px'};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 15px;
`;

const Button = ({ to, onClick, color, icon, children, width }) => {
    return (
      <Link to={to}>
        <StyledButton onClick={onClick} color={color} width={width}>
          {icon && <span>{icon}</span>}
          {children}
        </StyledButton>
        </Link>
    );
  };

export default Button;
