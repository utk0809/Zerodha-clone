import React from 'react';
function Awards() {
    return (
        <div className="container mt-5">
            <div className='row '>
                <div className='col-6 p-5'>
                    <img src='/media/largestBroker.svg' alt='Largest Broker' style={{width: '100%', height: 'auto'}}/>

                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and onvesting in:</p>
                    <div className='row'>
                        <div className='col-6 '>
                        <ul>
                        <li>Stocks</li>
                        <li>ETFs</li>
                        <li>Mutual Funds</li>
                        </ul>
                        </div>
                
                        <div className='col-6 '>
                        <ul>
                        <li>Cryptocurrency</li>
                        <li>Currency derivatives</li>
                        <li>Commodities derivatives</li>
                        </ul>
                    </div>
                        </div>
                       <img src='/media/pressLogos.png' alt='Press Logos' style={{width: '90%', maxWidth: '400px', height: 'auto'}}/>
                    </div>
                
                </div>
            </div>

    );
}

export default Awards;