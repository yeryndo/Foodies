import React from 'react';
import Burger from './Burger';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  height: 77px;
  border-bottom: 2px solid #f1f1f1;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    margin-left: 45px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="body">
        <h2 className="logo"><a href = "http://localhost:3000/"><img src={require("../../Images/logo.png")} width="140" alt="Foodies" /></a> </h2>
      </div>
      <Burger />
    </Nav>
  );
};
export default Navbar;
