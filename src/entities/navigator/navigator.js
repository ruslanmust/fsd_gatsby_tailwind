import React from 'react';
import { Link } from "gatsby";
import './navigator.css'

export const Navigator = () => {
    return (
        <ul className="navigation-list">
            <li>
                <Link to="/" className='navigation-list__item--bg'>
                    <span>Женская</span>
                </Link>
            </li>
            <li>
                <Link to="/" className='navigation-list__item--bg'>
                    <span>Мужская</span>
                </Link>
            </li>
            <li>
                <Link to="/" className='navigation-list__item--bg'>
                    <span>Детская</span>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <span>Популярная</span>
                </Link>
            </li>
        </ul>
    );
};