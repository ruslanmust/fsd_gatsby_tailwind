import React from 'react';
import { Link } from 'gatsby';
import { Container } from '../template/container'
import { Navigator } from 'entities/navigator'
import { UserProfile } from 'entities/user'
import { Cart } from 'entities/cart';
import { SearchForm } from 'features/search';
import './header.css'

export const Header = () => {
    return (
        <header className='bg-[#FBFCFF]'>
            <Container>
                <div className="top-bar">
                    <div className="top-bar__location">
                        <span className='pr-4'>Моя локация</span><a href="/" className="top-bar__location-add">Москва</a>
                    </div>
                </div>
                <div className='flex place-content-between'>
                    <nav className='flex'>
                        <Link className='logo' to='/' >Alrt</Link>
                        <Navigator/>
                        <SearchForm/>
                    </nav>
                    <div className='flex'>
                        <UserProfile/>
                        <Cart/>
                    </div>
                </div>
            </Container>
        </header>
    );
};