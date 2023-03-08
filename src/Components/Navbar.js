import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import{FaCartPlus} from 'react-icons/fa';
// import { ButtonContainer } from './Button';
// import{FaCartPlus} from 'react-icons/fa';


const Navbar = ()=> {
        return (
            <NavWrapper className="navbar navbar-extends-sm navbar-dark px-sm-5"  >
                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */ }

                <Link to='/'>
                    <img src="img/logo.png" alt=" " className="navbar-brand"/>
                </Link>

                <ul className ="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/"className="nav-link">
                            Home
                        </Link>
                        <Link to="/aboutus"className="nav-link">
                            About
                        </Link>
                        <Link to="/contact"className="nav-link">
                            Contact
                        </Link>
                        <Link to="/productlist"className="nav-link">
                            Products
                        </Link>
                        
                    </li>
                </ul>

            <form className="d-flex">
                <Link to='/cart'className="ml-auto">
                        <ButtonContainer><span className="mr-2"><FaCartPlus/></span>
                            my cart
                        </ButtonContainer>
                </Link>

                <Link class="btn btn-primary" to="/signin" style={{borderRadius:"3rem"}} 
                role="button">Sign In</Link>

                <Link class="btn btn-outline-success" to="/signup" 
                style={{borderRadius:"3rem", marginLeft:"5px"}}
                role="button">Sign Up</Link>
            
            </form>

                {/* <Link to='/cart'className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                        <FaCartPlus/>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link> */}

           
                
            </NavWrapper>
        );
    
}

export default Navbar;

const NavWrapper = styled.nav`
background: #fff;
.nav-link{
    color: #337437  !important;
    font-size: 20px;
    font-weight: 600;
    margin-left: 20px;
    
}
.btn{
    background-color:#337437;
    border-color:#337437;
    color:#fff;
}
`;




