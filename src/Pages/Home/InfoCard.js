import React from 'react';

const InfoCard = ({ img, cardTittle, cardp, bgClass }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl px-12 mx-4 ${bgClass}`}>
            <figure>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTittle}</h2>
                <p>{cardp}</p>

            </div>
        </div>
    );
};

export default InfoCard;