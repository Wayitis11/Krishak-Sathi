import React from 'react';
import Commonpages from './Commonpages';
import cool from '../Components/Images/cool.jpg';
import Header from './Header';




const Home = ()=> {
    return (
        <>
            <Header/>
            <Commonpages 
            name='Grow your Sells with' 
            imgsrc={cool} visit="/signup"
            btnname="Get Started"
            />
            
            
            
            
        </>
    )
}

export default Home

