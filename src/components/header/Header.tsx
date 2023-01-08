import React from 'react';
import Container from '../container/Container';
import Logo from '../logo/Logo';
import Login from './componetnts/login/Login';
import Menu from './componetnts/menu/Menu';
import classes from './Header.module.scss'
const Header = () => {
    return (
        <header className={classes.header}>
            <Container>
                <div className={classes.header__content}>
                    <Logo />
                    <Menu />
                    <Login />
                </div>
            </Container>
        </header>
    );
};

export default Header;