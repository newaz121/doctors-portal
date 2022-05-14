import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import ban from '../../assets/images/bg.png'
import { format } from 'date-fns';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div style={{
            background: `url(${ban})`,
            backgroundSize: 'cover'
        }} class="hero min-h-screen" >
            <div class="hero-content flex-col lg:flex-row-reverse ml-12">
                <img src={chair} alt='' class="max-w-xl rounded-lg shadow-2xl " />
                <div className='mr-12'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}

                    />

                </div>
            </div>
        </div >
    );
};

export default AppointmentBanner;