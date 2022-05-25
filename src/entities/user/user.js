import React, { useState } from 'react';
import { StaticQuery, graphql } from "gatsby"

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import { images, isRetina } from 'entities/cart/mocs/logo-img-db'
import './user.css'


// const [webp] = images.filter(item => item.id === 'webp');
// const [png] = images.filter(item => item.id === 'png');

export const UserProfile = ( ) => {
    

    const [user] = useState({name: 'Ann', surname: 'Rojkova'})

    return (
        <div className='profile-wrap'>
            <div className="profile-wrap__greetting-name">
                <p className="gretting-name__greetting">Привет</p>
                <p className="gretting-name__name">{user.name + ' ' + user.surname}</p>
            </div>
               
            {/* <picture className='img-wrap'>
                <source type="image/webp" srcSet={isRetina(webp.webp1x, webp.webp2x)}/>
                <source type="image/webp" srcSet={isRetina(png.png1x, png.png2x)}/>
                <img className='img-wrap__img-rounded' src={png.png1x} srcSet={png.png2x} alt="Картинка"/>
            </picture> */}
        </div>
    );
};