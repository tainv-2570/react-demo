import React from 'react';
import "./style.scss";

function Sidebar({ children }) {
    return (
        <aside className="main__sidebar">
            { children }
        </aside>
    );
}

export default Sidebar;