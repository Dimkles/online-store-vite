import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AdminRoutes, PrivateRoutes, PublickRoutes } from '../../../../routes/routes';
import classes from './Menu.module.scss'
const Menu: FC = () => {

    const [isAuth, setIsAuth] = useState(true)
    const [user, isUser] = useState({
        roles: [{ value: 'ADMIN' }, { value: 'USER' }]
    })

    return (
        <nav className={classes.menu}>
            <ul className={classes.menu__list}>
                {isAuth
                    ?
                    user.roles.some(e => e.value === 'ADMIN')
                        ?
                        AdminRoutes.map(route =>
                            route.name !== '404' ?
                                <li
                                    key={route.name}
                                    className={classes.menu__item}
                                >
                                    <NavLink
                                        className={classes.menu__link}
                                        to={route.path}
                                    >
                                        {route.name}
                                    </NavLink>

                                </li>
                                : ''
                        )
                        :
                        PrivateRoutes.map(route =>
                            route.name !== '404' ?
                                <li
                                    key={route.name}
                                    className={classes.menu__item}
                                >
                                    <NavLink
                                        className={classes.menu__link}
                                        to={route.path}
                                    >
                                        {route.name}
                                    </NavLink>
                                </li>
                                : ''
                        )
                    :
                    PublickRoutes.map(route =>
                        route.name !== '404' ?
                            <li
                                key={route.name}
                                className={classes.menu__item}
                            >
                                <NavLink
                                    className={classes.menu__link}
                                    to={route.path}
                                >
                                    {route.name}
                                </NavLink>
                            </li>
                            : ''
                    )
                }
            </ul>
        </nav>
    );
};

export default Menu;