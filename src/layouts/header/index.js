import React from 'react';
import logo from '../../assets/images/logo.webp';
import "./style.scss";

function Header({ children }) {
    return (
        <header>
            <div className="header__content">
                <div className="logo__group">
                    <a href="https://community.algolia.com/instantsearch.js/" className="logo__image">
                        <img src={logo} alt="logo" width="40" />
                    </a>
                    <a href="./" className="logo__text">
                        amazing
                    </a>
                </div>
                {children}
            </div>
        </header>
    );
}
export default Header;