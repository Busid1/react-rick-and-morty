import "./footer.css";
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Footer() {

    const location = useLocation();

    let footerStyle = {};

    switch (location.pathname) {
        case '/react-rick-and-morty/':
        footerStyle = { backgroundColor: '#101820' };
        break;
        case '/react-rick-and-morty/store':
        footerStyle = { backgroundColor: '#134c8f' };
        break;
        case '/react-rick-and-morty/comunity':
        footerStyle = { backgroundColor: 'rgba(82,88,107,1)' };
        break;
        case '/react-rick-and-morty/login':
        footerStyle = { backgroundColor: 'rgba(82,88,107,1)' };
        break;
        case '/react-rick-and-morty/register':
        footerStyle = { backgroundColor: 'rgba(82,88,107,1)' };
        break;
        default:
        footerStyle = { backgroundColor: '#101820' };
        break;
    }

    return (
        <footer style={footerStyle}>
            <nav>
                <img src="../../build/logo.webp" className="" alt="" />
                <h4>Universae</h4>
            </nav>
        </footer>
                        
                    
    );
}
