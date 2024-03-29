import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

import { signOutAPI } from '../actions'

const Header = (props) => {
    return (
        <div>
            <Container>
                <Content>
                    <Logo>
                        <a href="/home">
                            <img src="/images/home-logo.svg" alt="logo" />
                        </a>
                    </Logo>
                    <Search>
                        <div>
                            <input type="text" placeholder='Search' />
                        </div>
                        <SearchIcon>
                            <img src="/images/search-icon.svg" alt="" />
                        </SearchIcon>
                    </Search>
                    <Nav>
                        <NavListWrap>
                            <NavList className='active'>
                                <a>
                                    <img src="/images/nav-home.svg" alt="home" />
                                    <span>Home</span>
                                </a>
                            </NavList>
                            <NavList>
                                <a>
                                    <img src="/images/nav-network.svg" alt="home" />
                                    <span>My Network</span>
                                </a>
                            </NavList>
                            <NavList>
                                <a>
                                    <img src="/images/nav-jobs.svg" alt="home" />
                                    <span>Jobs</span>
                                </a>
                            </NavList>
                            <NavList>
                                <a>
                                    <img src="/images/nav-messaging.svg" alt="home" />
                                    <span>Messaging</span>
                                </a>
                            </NavList>
                            <NavList>
                                <a>
                                    <img src="/images/nav-notifications.svg" alt="home" />
                                    <span>Notifications</span>
                                </a>
                            </NavList>
                            <User>
                                <a>

                                    {props.user && props.user.photoURL ? (<img src={props.user.photoURL} alt="" />) : (<img src="/images/user.svg" alt="" />)}
                                    <span>Me
                                    <img src="/images/down-icon.svg" alt="" />
                                    </span>
                                </a>
                                <SignOut onClick={() => props.signOut()}>
                                    <a>SignOut</a>
                                </SignOut>
                            </User>

                            <Work>
                                <a>
                                    <img src="/images/nav-work.svg" alt="" />
                                    <span>Work
                                    <img src="/images/down-icon.svg" alt="" />
                                    </span>

                                </a>
                            </Work>
                        </NavListWrap>
                    </Nav>
                </Content>
            </Container>
        </div>
    )
}

const Container = styled.div`
background-color: white;
border-bottom: 1px solid  rgba(0, 0, 0, 0.08);
left: 0;
padding: 0 24px;
position: fixed;
top: 0;
width: 100vw;
z-index: 100;
`;

const Content = styled.div`
display: flex;
align-items: center;
margin: 0 auto;
min-height: 100%;
max-width: 1128px   ;
`;

const Logo = styled.span`
margin-right: 8px;
font-size: 0px;
`;

const Search = styled.div`
opacity: 1;
flex-grow: 1;
position: relative;
& > div {
    max-width: 280px;
    input {
    border: none;
    box-shadow: none;
    background-color: #eef3f8;
    border-radius: 2px;
    color: rgba(0, 0, 0, 0.9);
    width: 218px;
    padding: 0 8px 0 40px;
    line-height: 1.75;
    font-weight: 400;
    font-size: 14px;
    height: 34px;
    border-color: #dce6f1;
    vertical-align: text-top;
    }
}
`;

const SearchIcon = styled.div`
width: 40px;
position: absolute;
z-index: 1;
top: 10px;
left: 7px;
margin: 0px;
pointer-events: none;
border-radius: 0 2px 2px 0;
display: flex;
justify-self: center;
align-items: center;
`;

const Nav = styled.nav`
    margin-left: auto;
    display: block;
    @media (max-width: 768px){
    position: fixed;
    bottom: 0;
    left: 0;
    background: white;
    width: 100%;
    }
`;

const NavListWrap = styled.ul`
display: flex;
flex-wrap: nowrap;
list-style-type: none;

.active{
    span:after{
        content: '';
        transform: scaleX(1);
        border-bottom: 2px solid var(--white, #fff);
        bottom: 0;
        left: 0;
        position: absolute;
        transition: transform 0.2s ease-in;
        width: 100%;
        border-color: rgba(0, 0, 0, 0.9);
    }
}

`;

const NavList = styled.li`
display: flex;
align-items: center;
a{
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span{
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    }
    @media (max-width: 768px){
    min-width: 70px;
    }
    
}
&:hover, &:active{
        a{
            span {
                color: rgba(0, 0, 0, 0.9);
            }
        }
    }

`;

const SignOut = styled.div`
position: absolute;
top:45px;
background: white;
border-radius: 9px 0 9px 9px;
width: 79px;
height: 40px;
font-size: 16px;
/* font-weight: 00; */
transition-duration: 167ms;
text-align: center;
display: none;
`;

const User = styled(NavList)`
a>img{
    width: 24px;
    height: 24px;
    border-radius: 50%;
}

span {
    display: flex;
    align-items: center;
}

&:hover {
    ${SignOut} {
        align-items: center;
        display: flex;
        justify-content: center;
    }
}
`;
const Work = styled(User)`
border-left: 1px solid rgba(0, 0, 0, 0.08);

`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
}

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

