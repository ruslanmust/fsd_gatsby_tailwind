import * as React from "react";
import { Template } from "app/layout/template"
import { Container } from "app/layout/template/container";
import './index.css'

const HomePage = () => {

    return (
        <Template>
            <Container>
                <div className='text-2xl text-cyan-500 font-display font-black'>
                    text
                </div>
            </Container>
        </Template>
    )
}

export default HomePage;