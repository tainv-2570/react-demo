import React from 'react';
import "./style.scss";

function Main({children}) {
    return (
        <main className="main-content">
            {children}
        </main>
    );
}

export default Main;