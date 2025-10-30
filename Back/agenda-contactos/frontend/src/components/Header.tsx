import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Agenda de Contactos</h1>
            <nav>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/contactos">Contactos</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;