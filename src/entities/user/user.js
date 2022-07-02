import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './user.css'

export const UserProfile = ( ) => {

  const { contentfulCustomer } = useStaticQuery(graphql`
  {
    contentfulCustomer {
      avatar {
        gatsbyImageData(placeholder: BLURRED, height: 48, formats: AUTO)
        file {
          url
          fileName
          contentType
        }
      }
    }
  }  
`)

    const image = getImage(contentfulCustomer.avatar)

  console.log('image >>>', image);

    const [user] = useState({name: 'Ann', surname: 'Rojkova'})

    return (
        <div className='profile-wrap'>
            <div className="profile-wrap__greetting-name">
                <p className="gretting-name__greetting">Привет</p>
                <p className="gretting-name__name">{user.name + ' ' + user.surname}</p>
            </div>
            <GatsbyImage className='img-wrap__img-rounded' image={image} alt={contentfulCustomer.avatar.file.fileName}/>
        </div>
    );
};