import React from 'react';
import headerSt from './header.module.css';
import {Logo, BurgerIcon, ListIcon, ProfileIcon, Box} from '@ya.praktikum/react-developer-burger-ui-components'

class AppHeader extends React.Component {
    render() {
        return (
            <header className={`${headerSt.header} text text_type_main-default`}>
                <div className={`${headerSt.headerContainer} limiter`}>
                    <nav className={headerSt.nav}>
                        <ul className={headerSt.list}>
                            <li className={headerSt.listItem}>
                                <a href="#" className={`${headerSt.link}`}>
                                    <BurgerIcon type="primary"/>
                                    <span className={`${headerSt.linkText}`}>Конструктор</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`${headerSt.link}  ${headerSt.linkActive}`}>
                                    <ListIcon type="primary"/>
                                    <span className={`${headerSt.linkText}`}>Лента заказов</span>
                                </a>
                            </li>
                        </ul>

                    </nav>

                    <Logo/>


                    <a href="#" className={`${headerSt.link} ${headerSt.linkActive}`}>
                        <ProfileIcon type="primary"/>
                        <span className={`${headerSt.linkText}`}>Личный кабинет</span>
                    </a>
                </div>
            </header>
        );
    }
}

export default AppHeader;
