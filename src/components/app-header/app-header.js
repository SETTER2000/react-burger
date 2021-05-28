import React from 'react';
import headerStyles from './header.module.css';
import {Logo,BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

class AppHeader extends React.Component {
    render() {
        return (
            <header className={headerStyles.header}>

                <BurgerIcon type="primary" /> <span className="text text_type_main-default">Конструктор</span>

                {/*<Typography> Joopp</Typography>*/}
                <Logo/>
                <ProfileIcon />
            </header>
        );
    }
}

export default AppHeader;
