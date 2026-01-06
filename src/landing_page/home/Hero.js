import React from 'react';

function Hero() {
    return (
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='/media/homeHero.png' alt='Hero Image' className='mb-5' />
            <h1 classNmae='mt-5'>Invest in everything</h1>
            <p>Online platform to invest in stocks, ETFs,crypto and more</p>
            <button className='btn btn-primary  fs-5 nb-5' style={{width:"20%" , margin: "auto" }}>Signup Now</button>
            
            
            </div>


        </div>
     );
}

export default Hero;