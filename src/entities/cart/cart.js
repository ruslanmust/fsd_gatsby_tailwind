import React from 'react';
import { Link } from "gatsby";
import './cart.css'

export const Cart = () => {
    return (
        <Link className="cart" to='/'>
            <div className="cart__img"/>
        </Link>
    );
};