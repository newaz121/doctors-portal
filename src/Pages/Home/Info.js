import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import location from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-24 px-8'>
            <InfoCard cardp='Lorem Ipsum is simply dummy text of the pri' cardTittle='Opening Hours' bgClass='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoCard>
            <InfoCard cardp='Brooklyn, NY 10036, United States' cardTittle='Visit our location' bgClass="bg-accent" img={location}></InfoCard>
            <InfoCard cardp='+000 123 456789' cardTittle='Contact us now' bgClass='bg-gradient-to-r from-secondary to-primary' img={phone}></InfoCard>
        </div>
    );
};

export default Info;