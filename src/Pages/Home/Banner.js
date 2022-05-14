import React from 'react';
import chair from '../../assets/images/chair.png';
import ban from '../../assets/images/bg.png'


const Banner = () => {
    return (
        <div style={{
            background: `url(${ban})`,
            backgroundSize: 'cover'
        }} className="hero min-h-screen   w-full h-full">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-xl rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-accent">Your New Smile Starts <br /> Here</h1>
                    <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary uppercase text-white font-bold  bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;